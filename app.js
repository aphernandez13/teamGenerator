const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");


const render = require("./lib/htmlRenderer");
const employees = []

const {
  addEmployee,
  internPrompt,
  engineerPrompt,
  managerPrompt,
} = require("./prompt");

managerPrompt().then(function (manager) {
  employees.push(
    new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
  );

  console.log(manager);
  main();
});

function main() {
  addEmployee().then(function ({ engineerOrIntern }) {
    if (engineerOrIntern === "Engineer") {
      //prompt for engineer details
      engineerPrompt().then(function (engineer) {
       employees.push(
          new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        );
        console.log(engineer);
        main();
      });
    } else if (engineerOrIntern === "Intern") {
      //prompt for intern info
      internPrompt().then(function (intern) {
        employees.push(
          new Intern(intern.name, intern.id, intern.email, intern.school)
        );
        console.log(intern);
        main();
      });
    } else {
      //write to file

      const peoples = render(employees);
      fs.writeFile("main.html", peoples, function (err) {
        if (err) {
          throw err;
        }
        console.log("written to html file");
      });
    }
  });
}
