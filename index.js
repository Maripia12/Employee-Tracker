const inquirer = require("inquirer");
const db = require("./db");
require("console.table");


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
          "Update Employee",
          "Update role",
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

      

      const addDepartments = () => {
          inquirer
          .prompt([
              {
             
                name: "department name",
                type: 'input',
                message:"What department would you like to add?"
               }

              ])





            .then(answer => {
                connection.query('INSERT INTO department (name)VALUES (?);',)
                
        })

        }

        const addRoles = () => {
            //add findAllDepartment()
            //take the date and map

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

            //  results.for each((answer) => {
            //      connection.query('INSERT INTO role (title,salary,department_id) VALUES (?,?,?);',

            //  

        }

        const addEmployees = () => {
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
              }
             ]).then(answer => {
                var fName = answer.first_name;
                var lName = answer.last_name;

                db.findAllRoles().then(([rows])=>{
                    var roles= rows;
                    const rChoices = roles.map(({id, title})=>({
                        name: title,
                        value: id
                    }))

                    inquirer.prompt({
                      name: "role_id",
                      type: "list",
                          message: "What is the employees role",
                          choices: rChoices
                    }).then(res =>{
                        var roleId = res.role_id

                        db.findAllEmployees().then(([rows])=>{
                            var employees = rows;
                            const mChoices = employees.map(({id, first_name, last_name})=>({
                                name: `${first_name} ${last_name}`,
                                value: id
                            }));

                            inquirer.prompt({
                                name:"manager_id",
                                type: "list",
                                message: "who is this employee's manager",
                                choices: mChoices
                            }).then(res => {
                                var newEmployee={
                                    manager_id: res.manager_id,
                                    role_id: roleId,
                                    first_name: fName,
                                    last_name: lName
                                }

                                db.createEmployee(newEmployee)
                            }).then(()=>{
                                direction();
                            })
                        })
                    })
                })


             })
              



            
             
        } 

       

            function viewDepartments() {
              db.findAllEmployees()
                .then(([data]) => {
                  console.table(data);
                })
                .then(() => direction());
            }


            
            function viewRoles() {
              db.findAllEmployees()
                .then(([data]) => {
                  console.table(data);
                })
                .then(() => direction());
            }

 

            function viewEmployees() {
                 db.findAllEmployees()
                 .then(([data]) => {
                     console.table(data);
                 }).then(()=> direction());
             }
     
        
           



    direction();
        



  
  



   
