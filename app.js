const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = []

const {
  addEmployee,
  internPrompt,
  engineerPrompt,
  managerPrompt,
} = require("./prompt");

managerPrompt().then(function (manager) {
  team.push(
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
        team.push(
          new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        );
        console.log(engineer);
        main();
      });
    } else if (engineerOrIntern === "Intern") {
      //prompt for intern info
      internPrompt().then(function (intern) {
        team.push(
          new Intern(intern.name, intern.id, intern.email, intern.school)
        );
        console.log(intern);
        main();
      });
    } else {
      //write to file

      const team = render(team);
      fs.writeFile("main.html", team, function (err) {
        if (err) {
          throw err;
        }
        console.log("written to html file");
      });
    }
  });
}
