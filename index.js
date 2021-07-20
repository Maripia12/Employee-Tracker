const inquirer = require('inquirer')
const db = require('./db');
require('console.table');

function direction(){

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
          "Update Employees",
          "Update roles",
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

          case "Update Employees":
            updateEmployees();
            break;

          case "Update Roles":
            updateRoles();
            break;
        }



        })

      }

    //   const addDepartments = () => {
    //       inquirer
    //       .prompt({
             
    //             name: "department name",
    //             type: 'input',
    //             message:"What department would you like to add?"
                
    //         })



    //         .then((answer) => {
    //             connection.query('INSERT INTO department (name)VALUES (?);',)
    //     })

    // }

        const addRoles = () => {
            inquirer.prompt([

                {
              name: "title",
              type: "input",
              message: "Enter the employee's title:",
                },

                {
              name: "salary",
              type: "input",
              message: "Enter the employee's salary:",
                },

                {
              name: "id",
              type: "input",
              message: "Enter the employee's department_id:",
                },

            ])

            //  .then((answer) => {
            //      connection.query('INSERT INTO role (title,salary,department_id) VALUES (?,?,?);',

            //  

        }

        const addEmployees = () => {
            inquirer
            .prompt([

              {
                name: "first name",
                type: "input",
                message: "Enter employees first name:",
              },

              {
                name: "last name",
                type: "input",
                message: "Enter employees last name:",
              },

              {
                name: "role id",
                type: "input",
                message: "Enter employees role_id:",
              },

              {
                name: "manager id",
                type: "input",
                message: "Enter employees manager_id:",
              },

            ])

            // .then((answer) => {
            //     connection.query('INSERT INTO employee ("fist_name , last_name , role_id , manager_id) VALUES (?,?,?,?) " 

            //     )
            // }
             
        } 
        
        
           function viewEmployees() {
                db.findAllEmployees()
                .then((data) => {
                    console.table(data);
                }).then(()=> direction());
            }
    



    // function viewDepartment() {
    //     console.log('Initiate view department function');
        
    // }
  

  



//     // addEmployee();
//     createDepartment(a) {

//     }
// }


//  function addEmployee(){
//     const data =  prompt([
//         {
//             name: "fname",
//             message:"what is the employees first name?"
//         }, 
//         // {
//         //     name: "lName",
//         //     message: "what is the employees last name?"
//         // }
//     ])
//          db.createEmployee(data)
    

    

// }

direction();