const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
// const url = `https://api.github.com/users/${username}/repos`;


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

function generateHTML(answers) {
  return `${answers.name}
`;
}

async function init() {
  console.log("hi");
  try {
 
     const { githubusername, title } = await promptUser();
        console.log(title);
        const { data } = await axios.get(
          `https://api.github.com/users/${githubusername}/repos`
        )
        
        ;
    //   return writeFileAsync("index.html", generateHTML(answers));
          console.log( `https://api.github.com/users/${githubusername}/repos`)
        //console.log(data);
       // repo name
          var myobj={
            name:data[0].name,
            title:githubusername.title
          }
        const html = generateHTML(myobj);

        return writeFileAsync("readme.md", data);

        // console.log(data[0].name);
        // repo link
        // console.log(data[0].html_url);
        // description
        // console.log(data[0].description);
        //login name
        console.log(data[0].owner.login);
        //main repo url
        console.log(data[0].owner.html_url);
        //avatar
        console.log(data[0].owner.avatar_url);

        //console.log(data[0]);
        // console.log("retreived github api");
    //   console.log("Successfully wrote to index.html");
    }
     catch (err) {
      console.log(err);
    }

    
}

init();
