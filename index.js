// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type:"input", 
    name:"title",
    message: "What is the title of your project?"
}, {
    type:"input",
    name:"description",
    message:"Brief description of the project"
 },
{
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
},
{
    type:"list",
    name:"license",
    message:"What license does your project have?",
    choices:["MIT","ISC","GNU","APACHE 2.0","NO LICENSE"]
},
   {
     
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const fileToWrite = path.join(process.cwd(), fileName)
    fs.writeFileSync(fileToWrite, data)
}


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers)=>{
     return writeToFile("/output/README.md",generateMarkdown({...answers}))
    })
    .catch((err) => {
        console.log(err);
      });
}

init();