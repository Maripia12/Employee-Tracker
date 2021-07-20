drop database if exists employee_tracker_db;
Create Database employee_tracker_db;

use employee_tracker_db;

Create Table department (
id int not null auto_increment,
name varchar (30) unique not null,
primary key (id)
);

Create Table role (
id int not null auto_increment,
title varchar (30) unique not null,
salary decimal not null,
department_id int not null,
index ind_dept (department_id),
constraint deptconst foreign key(department_id) references department(id) on delete cascade,
primary key (id)
);

Create Table employee (
id int not null auto_increment,
first_name varchar (30) not null,
last_name varchar (30) not null,
role_id int not null,
index roleInd (role_id),
constraint roleconst foreign key (role_id) references role(id) on delete cascade,
manager_id int,
index manind (manager_id),
constraint manconst foreign key (manager_id) references employee(id) on delete set null,
primary key (id)
);