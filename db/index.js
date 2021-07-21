const connection = require("./connect");

class DB {
  constructor(connection) {
     this.connection = connection;
  }

  //View Departments / Roles / Employee


  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, concat(manager.first_name, ' ' , manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT Join department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id; "
      );
  }

  findAllRoles(){
      return this.connection
        .promise()
        .query(
          "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id; "
        );
  }

  //create findAllDepartments() similar to find all roles



  createEmployee(a){
      return this.connection
        .promise()
        .query("INSERT INTO employee SET ?", a );
  }

  //create

}
module.exports = new DB(connection);