const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
var image = "![Image of Jasmine's Badge](https://img.shields.io/badge/Readme--Generator-V1.0-blue)"

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "githubusername",
        message: "What is your github username?"
      },

      {
        type: "input",
        name: "title",
        message: "What is the project title?"
      },

      {
        type: "input",
        name: "description",
        message: "Please write your project description?"
      },

      {
        type: "input",
        name: "installation",
        message: "What needs to be installed?"
      },

      {
        type: "input",
        name: "usage",
        message: "Provide any instructions for use."
      },

      {
        type: "checkbox",
        message: "What licenses do you need?",
        name: "licenses",
        choices: ["Apache License 2.0","GNU","MIT"]
      },

      {
        type: "input",
        name: "contributing",
        message: "Please list any collaborators or third-party assets."
      },

      {
        type: "input",
        name: "tests",
        message: "What tests need to be run?"
      }
    ]);
  }

//   function generateHTML(answers) {
//     return `${answers.name}
//   `;
//   }
  
  async function init() {
    console.log("hi");
    try {
   
       const { githubusername, title, description, installation, usage, licenses, contributing, tests } = await promptUser();
       return writeFileAsync("Readme.md", generateReadme({ githubusername, title, description, installation, usage, licenses, contributing, tests }));
    }
    catch (err) {
        console.log(err);
      }
    }

init();

function generateReadme(responseobj){
    //return 
    let readmeData= 
    "# ReadmeGenerator " + image + "\n\n" +
    
    responseobj.title + "\n\n" +

    "## Description" + "\n\n" +

    responseobj.description + "\n\n" +

    "## Table of Contents \n\n"+

"* [Installation](#installation) \n"+
"* [Usage](#usage) \n" +
"* [Credits](#credits) \n"+
"* [License](#license) \n"+


    "## Installation" + "\n\n" +

    responseobj.installation + "\n\n" +

    "## Usage" + "\n\n" +

    responseobj.usage + "\n\n" +

    "## License" + "\n\n" +

    responseobj.licenses + "\n\n" +

    "## Contributing" + "\n\n" +

    responseobj.contributing + "\n\n" +

    "## Tests" + "\n\n" +

    responseobj.tests + "\n\n" +
    
    "### Github Username" + "\n\n" +

    responseobj.githubusername;
    // responseobj.description+responseobj.installation+responseobj.usage+ responseobj.licenses+responseobj.contributing+responseobj.tests+responseobj.githubusername;
    return readmeData;
//     "
//     # 

};
