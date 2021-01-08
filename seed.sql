USE employeedb;

----- Department Seeds -----

INSERT INTO department (id, name)
VALUES (1, "Finance");

INSERT INTO department (id, name)
VALUES (2, "Marketing");

INSERT INTO department (id, name)
VALUES (3, "HR");

INSERT INTO department (id, name)
VALUES (4, "IT");

----- Role Seeds -----

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Analyst", 45000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Banker", 180000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Account Executive", 75000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Brand Manager", 82000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Business Partner", 175000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 200000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "System Adminstrator", 102000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Systems Architect", 165000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Manager", 105000, 4);

----- Employees Seeds -----

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Matt", "Mckerroll", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Bruno", "Buccuarati", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Guido", "Mista", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Joseph", "Joestar", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Giorno", "Giovanna", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Dio", "Brando", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Josuke", "higashikata", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Jean Pierre", "Polnareff", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Trish", "Una", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Jolyne", "Cujoh", 8, 10);