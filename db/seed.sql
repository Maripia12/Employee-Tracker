SELECT * FROM employee_tracker_db.department;

use employee_tracker_db;

<---Departent Table--->

insert into department (name)
values ("Sales");


insert into department (name)
values ("Engineering");

insert into department (name)
values ("Finance");

insert into department (name)
values ("Legal"); 


<---Role Table--->


SELECT * FROM employee_tracker_db.role;

use employee_tracker_db;

insert into role (title, salary, department_id)
values ("Sales Lead", 75000, 1);

insert into role (title, salary, department_id)
values ("Salesperson", 85000, 1);

insert into role (title, salary, department_id)
values ("Lead Engineer", 250000, 2);

insert into role (title, salary, department_id)
values ("Software Engineer", 155000, 2);

insert into role (title, salary, department_id)
values ("Accountant", 125000, 3);

insert into role (title, salary, department_id)
values ("Account Manager", 145000, 3);

insert into role (title, salary, department_id)
values ("Legal Team Lead", 275000, 4);

insert into role (title, salary, department_id)
values ("Lawyer", 125000, 4);


<--- Employee Table --->

insert into employee (first_name, last_name, role_id, manager_id)
values ("Katie", "Smith", 1, null);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Josh", "Heart", 2, 1);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Kevin", "Perez", 3, null);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Pia", "Paulino", 2, 3);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Abbie", "Hope", 4, 5);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Michael", "Jones", 5, null);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Megan", "Kelly", 6, null);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Alex", "Mario", 7, 6);


