const express = require('express');
const readlineSync = require('readline-sync');
const app = express();
const PORT = 3000;


const users = [
  { name: 'hariharan', gmail: 'dummy@gmail.com', occupation: 'Developer' },
  { name: 'siva', gmail: 'dummy@gmail.com', occupation: 'Designer' },
  { name: 'chandru', gmail: 'dummy@gmail.com', occupation: 'Manager' }
];


const login = () => {
  const name = readlineSync.question('Enter your name: ');
  const gmail = readlineSync.questionEMail('Enter your Gmail: ');
  const occupation = readlineSync.question('Enter your occupation: ');

  
  const user = users.find(
    user => user.name === name && user.gmail === gmail && user.occupation === occupation
  );

  if (user) {
    console.log('Login successful:', user);
  } else {
    console.log('Invalid credentials');
  }
};


app.get('/login', (req, res) => {
  login();
  res.send('Login process completed. Check the terminal for results.');
});


app.listen(PORT, () => {
  console.log(`Server is running`);
  console.log('Visit http://localhost:3000/login to start the login process.');
});
