const path = require("path");
const fs = require("fs");

const {
  addEmployee,
  internPrompt,
  engineerPrompt,
  managerPrompt,
} = require("./prompt");

managerPrompt().then(function (manager) {
  //build a manager object, and push into employees array
  console.log(manager);
  main();
});

function main() {
  addEmployee().then(function ({ engineerOrIntern }) {
    if (engineerOrIntern === "Engineer") {
      //prompt for engineer details
      engineerPrompt().then(function (engineer) {
        //build engineer add to employees array
        console.log(engineer);
        main();
      });
    } else if (engineerOrIntern === "Intern") {
      //prompt for intern info
      internPrompt().then(function (intern) {
        //build engineer add to employees array
        console.log(intern);
        main();
      });
    } else {
      //write to file

      const team = render(employees);
      fs.writeFile("main.html", team, function (err) {
        if (err) {
          throw err;
        }
        console.log("written to html file");
      });
    }
  });
}
