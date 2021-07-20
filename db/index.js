const connection = require('./connect');

class Data {
    constructor(connection){
        return this.connection = connection
    }

    //find all employees, join eith roles and deparment. display roles, salaries, departments, and managers

    findEmployees(){
        return this.connection.query(
          "SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary FROM employee LEFT JOIN role on employee.role_id = role.id LEFT Join department on role.department_id = department.id; "
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
     createDepartment(a) {
         return this.connection.query("INSERT INTO department SET ?", a)
     }

    //delete department

    //find all employees ins a given department, join with roles to display titles

    //find all employees by manager,  join with depart and roles to display titles and department names

 

}

module.export = new Data(connection)