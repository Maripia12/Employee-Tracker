Create Database employee_tracker_db;

use employee_tracker_db;

Create Table department (
id int not null auto_increment,
name varchar (30),
primary key (id)
);

Create Table role (
id int not null auto_increment,
title varchar (30),
salary decimal,
department_id int not null,
primary key (id)
);

Create Table employee (
id int not null auto_increment,
first_name varchar (30),
last_name varchar (30),
role_id int not null,
manager_id int,
primary key (id)
);
