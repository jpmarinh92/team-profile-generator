const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

function Members() {
  this.member;
  this.file = '';
}

Members.prototype.initialize = function() {

  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'text',
      name: 'Id',
      message: 'What is your ID?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'text',
      name: 'office',
      message: 'What is your office number?'
    },
    {
      type: 'list',
      name: 'add',
      message: 'Would you like to add a team member?',
      choices: [
        {name:"No", value:"No"},
        {name:"Yes, an Engineer", value:"enginner"},
        {name:"Yes, an Intern", value:"intern"},
      ]
    }
  ])

  .then(({ name, Id, email, office, add }) => {
    this.manager = new Manager(name, Id, email, office);
    
    this.file += `
    <div class="card">
      <div class="card-header">
        <h2 class="name">${this.manager.getName()}</h3>
        <h3 class="title"> <span class="oi oi-monitor"></span>  ${this.manager.getRole()}</h2>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="id body-item">ID: ${this.manager.getId()}</div>
          <div class="email body-item">
            <p>Email: </p>
            <a href = "mailto: ${this.manager.getEmail()}">${this.manager.getEmail()}</a>
          </div>
          <div class="office body-item">Office number: ${this.manager.officeNumber}</div>
        </div>
      </div>
    </div>
    `
  
    if(add == 'enginner'){
      this.addEngineer();
    } else if (add == 'intern'){
      this.addIntern();
    } else {
      generatePage(this.file)
      console.log('File created!')
    }
  });

};

Members.prototype.addEngineer = function() {

  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "What is the engineer's name?"
    },
    {
      type: 'text',
      name: 'Id',
      message: "What is the engineer's ID?"
    },
    {
      type: 'text',
      name: 'email',
      message: "What is the engineer's email?"
    },
    {
      type: 'text',
      name: 'github',
      message: "What is the engineer's github page?"
    },
    {
      type: 'list',
      name: 'add',
      message: 'Would you like to add another team member?',
      choices: [
        {name:"No", value:"No"},
        {name:"Yes, an Engineer", value:"enginner"},
        {name:"Yes, an Intern", value:"intern"},
      ]
    }
    ])
  
    .then(({ name, Id, email, github, add }) => {
    let engineer = new Engineer(name, Id, email, github);

    this.file += `
    <div class="card">
      <div class="card-header">
        <h2 class="name">${engineer.getName()}</h3>
        <h3 class="title"> <span class="oi oi-terminal"></span>  ${engineer.getRole()}</h2>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="id body-item">ID: ${engineer.getId()}</div>
          <div class="email body-item">
            <p>Email:  </p>
            <a href = "mailto: ${engineer.getEmail()}"> ${engineer.getEmail()}</a>
          </div>
          <div class="github body-item">
            <p>GitHub: </p>
            <a href = "https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()} </a>
        </div>
        </div>
      </div>
    </div>
    `

    if(add == 'enginner'){
      this.addEngineer();
    } else if (add == 'intern'){
      this.addIntern();
    } else {
      generatePage(this.file)
      console.log('File created!')
    }

  });
};

Members.prototype.addIntern = function() {

  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "What is the intern's name?"
    },
    {
      type: 'text',
      name: 'Id',
      message: "What is the intern's ID?"
    },
    {
      type: 'text',
      name: 'email',
      message: "What is the intern's email?"
    },
    {
      type: 'text',
      name: 'school',
      message: "What is the intern's school?"
    },
    {
      type: 'list',
      name: 'add',
      message: 'Would you like to add a team member?',
      choices: [
        {name:"No", value:"No"},
        {name:"Yes, an Engineer", value:"enginner"},
        {name:"Yes, an Intern", value:"intern"},
      ]
    }
    ])
    
  .then(({ name, Id, email, school, add }) => {
    let intern = new Intern(name, Id, email, school);

    this.file += `
    <div class="card">
      <div class="card-header">
        <h2 class="name">${intern.getName()}</h3>
        <h3 class="title"> <span class="oi oi-pencil"></span>  ${intern.getRole()}</h2>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="id body-item">ID: ${intern.getId()}</div>
          <div class="email body-item">
            <p>Email: </p>
            <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
          </div>
          <div class="school body-item">School: ${intern.getSchool()}</div>
        </div>
      </div>
    </div>
    `

    if(add == 'enginner'){
      this.addEngineer();
    } else if (add == 'intern'){
      this.addIntern();
    } else {
      generatePage(this.file)
      console.log('File created!')
    }

  });
};

const generatePage = file => {

  const html = `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
  
    <main>
      ${file}
    </main>
  
  </body>
  </html>

  `
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', html, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}


new Members().initialize();
