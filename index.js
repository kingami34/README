//Create a function for fs/inquirer
const fs =require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require ("./utils/generateMarkdown")
//Question for Readme assignment in a Nested Object
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'Github',

    },
    {
      type: 'input',
      message: 'What is your preferred email address?',
      name: 'contact',

    },
    {
        type: 'input',
        message: 'Give a description of project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Whats the name of your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your installation for this project?',
        name: 'Installation',
    },
   
    {
        type: 'input',
        message: 'What is the usage of this application?',
        name: 'Usage',
    },
   
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices:["apache","none"]
    },
   

  ])
  .then((data) => { 
      const Readme = generateMarkdown(data)
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    fs.writeFile('./dist/Readme.md', Readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);
    
  });