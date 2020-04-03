const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "githubusername",
        message: "What is your github username?"
      }
  
  ,
      {
        type: "input",
        name: "title",
        message: "Write title for Readme."
      },
  //     {
  //       type: "input",
  //       name: "hobby",
  //       message: "What is your favorite hobby?"
  //     },
  //     {
  //       type: "input",
  //       name: "food",
  //       message: "What is your favorite food?"
  //     },
  //     {
  //       type: "input",
  //       name: "github",
  //       message: "Enter your GitHub Username"
  //     },
  //     {
  //       type: "input",
  //       name: "linkedin",
  //       message: "Enter your LinkedIn URL."
  //     }
    ]);
  }

//   function generateHTML(answers) {
//     return `${answers.name}
//   `;
//   }
  
  async function init() {
    console.log("hi");
    try {
   
       const { githubusername } = await promptUser();
       return writeFileAsync("readme.md", generateReadme());
    }
    catch (err) {
        console.log(err);
      }
    }

init();

function generateReadme(){
    return "# 07 Readme file gnerator";
}