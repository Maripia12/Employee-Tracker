const inquirer = require("inquirer");
const chalk = require('chalk');

const db = require("./db");
const { connection } = require("./db");
require("console.table");



  console.log(chalk.blue('================================================='));  

  console.log(chalk.green(' ============$ EMPLOYEE TRACKER $==============='));  


  console.log(chalk.blue('================================================='));  


 

  



function direction() {
  inquirer
    .prompt({
      name: "direction",
      type: "list",
      message: "Welcome to Employee Management! What would you like to do?",
      choices: [
        "Add Departments",
        "Add Roles",
        "Add Employees",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Manager",
        "Update Employee Role",
        "Update role",
        "Quit",
      ],
    })
    .then((answer) => {
      switch (answer.direction) {
        case "Add Departments":
          addDepartments();
          break;

        case "Add Roles":
          addRoles();
          break;

        case "Add Employees":
          addEmployees();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "Update Employee Manager":
          updateEmployeeManager();
          break;

        case "Update Roles":
          updateRoles();
          break;

        default:
          quit();
      }
    });
}

function addDepartments() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What department would you like to add?",
      },
    ]).then((answer) => {
     // console.log(answer)
      db.createDepartment(answer).then(()=> direction())
    });
}

function addRoles() {
  //add findAllDepartment()
  //take the date and map


  db.findAllDepartments().then(([data])=>{
    let departmentList = data
    const deptChoice = departmentList.map(({id, name})=>({
      name: name,
      value: id
    }))

     inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "what is the Role you are adding?",
    },

    {
      name: "salary",
      type: "input",
      message: "Enter the Role's salary:",
    },

    {
      name: "department_id",
      type: "list",
      message: "What department does this role belong to?",
      choices: deptChoice
    }
  ]).then(res=>{
    db.createRole(res).then(()=> direction())
  })
  })

  //  results.for each((answer) => {
  //      connection.query('INSERT INTO role (title,salary,department_id) VALUES (?,?,?);',

  //
}

function addEmployees() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter employees first name:",
      },

      {
        name: "last_name",
        type: "input",
        message: "Enter employees last name:",
      },
    ])
    .then((answer) => {
      var fName = answer.first_name;
      var lName = answer.last_name;

      db.findAllRoles().then(([rows]) => {
        var roles = rows;
        const rChoices = roles.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt({
            name: "role_id",
            type: "list",
            message: "What is the employees role",
            choices: rChoices,
          })
          .then((res) => {
            var roleId = res.role_id;

            db.findAllEmployees().then(([rows]) => {
              var employees = rows;
              const mChoices = employees.map(
                ({ id, first_name, last_name }) => ({
                  name: `${first_name} ${last_name}`,
                  value: id,
                })
              );

              inquirer
                .prompt({
                  name: "manager_id",
                  type: "list",
                  message: "who is this employee's manager",
                  choices: mChoices,
                })
                .then((res) => {
                  var newEmployee = {
                    manager_id: res.manager_id,
                    role_id: roleId,
                    first_name: fName,
                    last_name: lName,
                  };

                  db.createEmployee(newEmployee);
                })
                .then(() => {
                  direction();
                });
            });
          });
      });
    });
}

function viewDepartments() {
  db.findAllDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => direction());
}

function viewRoles() {
  db.findAllRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => direction());
}

function viewEmployees() {
  db.findAllEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => direction());
}

function updateRoles() {
   db.findAllRoles().then(([rows]) => {
        var roles = rows;
        const rChoices = roles.map(({ id, title }) => ({
          name: title,
          value: id,
    }));
   

    inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "what is the Role you are updating?",
    },

    {
      name: "salary",
      type: "input",
      message: "Enter the Role's salary:",
    },

    {
      name: "department_id",
      type: "list",
      message: "What department does this role update belong to?",
      choices: deptChoice
    }
  
  
  ])

  
})

  
}

function updateEmployeeManager(){
  db.findAllEmployees().then(([data])=>{
    let emps= data;
    const empChoices = empData.map(({id, first_name, last_name})=>({
      name:`${first_name} ${last_name}`,
      value: id
    }));


  })
}

function quit() {
  process.exit();
}

direction();
