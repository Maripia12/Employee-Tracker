const connection = require('./connect');

class DB {
    constructor(connection){
        return this.connection = connection;
      

    }

    //View Departments / Roles / Employee 
    

    
    viewDepartments() {
        return this.connection.query('SELECT * FROM department' , (err, data) => {

        


        })
        
    }


    viewRoles() {
        return this.connection.query('SELECT * FROM role' , (err,data) => {

        
        })
        
        
    }

    viewEmployees() {
        return this.connection.query('SELECT * FROM employee' , (err,data) => {

           

        })
        
        
    }

    // Add Department / Roles / Employees



 
    //find all employees, join eith roles and deparment. display roles, salaries, departments, and managers

    findAllEmployees(){
        return this.connection.promise().query(
          "SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, concat(manager.first_name, ' ' , manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT Join department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id; "
        );
    }



    // find all employees minus the given employee id

    //create new employee
    // createEmployee(employee){
    //     return this.connection.query(
    //         "Insert Into department set ?", employee
    //     )
    // }

    //delete employee with id

    //update employee role

    //update employee manager

    //find all roles

    //create new role

    //delete role from DB

    //find all departments, join with employees and roles, sum up the budget by department

    //create new department
    //  createDepartment(a) {
    //      return this.connection.query("INSERT INTO department SET ?", a)
    //  }

    //delete department

    //find all employees ins a given department, join with roles to display titles

    //find all employees by manager,  join with depart and roles to display titles and department names

 

}

module.exports = new DB(connection);