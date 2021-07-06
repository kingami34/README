//Create a function for fs/inquirer
const fs =require("fs");
const inquirer = require("inquirer")

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
        message: 'How would you go about making this README better?',
        name: 'better',
    },
    {
        type: 'input',
        message: 'Whats the name of your project title?',
        name: 'title',
    },

  ])
  .then((data) => { 
      const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      </head>
      <body>
          <div>
              <h1>${data.name}</h1>
              
          </div>
          <div>
              <h1>${data.stack}</h1>
          </div>
          <div>
              <h1>${data.name}</h1>
          </div>
          <div>
              <h1>${data.contact}</h1>
          </div>
          
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                  crossorigin="anonymous"></script>
      </body>
      </html>`
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    fs.writeFile('log.txt', html, (err) =>
  err ? console.error(err) : console.log('Success!')
);
    
  });