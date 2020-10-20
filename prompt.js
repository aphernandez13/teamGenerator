const inquirer = require("inquirer");

function internPrompt() {
  return inquirer.prompt([
    {
      message: "What is your interns name?",
      name: "name",
    },
    {
      message: "What is your interns id?",
      name: "id",
    },
    {
      message: "What is your interns email?",
      name: "email",
    },
    {
      message: "What is your interns school?",
      name: "school",
    },
  ]);
}

function engineerPrompt() {
    return inquirer.prompt([
      {
        message: "What is your engineers name?",
        name: "name",
      },
      {
        message: "What is your engineers id?",
        name: "id",
      },
      {
        message: "What is your engineers email?",
        name: "email",
      },
      {
        message: "What is your engineers github?",
        name: "github",
      },
    ]);
  }

  function addEmployee() {
    return inquirer.prompt([
      {
        type: "list",
        message: "Who would ou like to add to the team",
        name: "engineerOrIntern",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ]);
  }

  function managerPrompt() {
    return inquirer.prompt([
      {
        message: "What is your manager's name?",
        name: "name",
      },
      {
        message: "What is your manager's id?",
        name: "id",
      },
      {
        message: "What is your manager's email?",
        name: "email",
      },
      {
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
    ]);
  }

  module.exports = {
      addEmployee,
      internPrompt,
      managerPrompt,
      engineerPrompt,
  };

  
  