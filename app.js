const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require(".");

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Sundin13!',
    database: 'employeedb',
  });

  init();

function init(){

    
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "MAIN MENU",
        choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role"
        ]
    })
    .then((answer) => {

      
        switch (answer.action) {
            case "View all employees":
                viewAllEmployees();
                break;

            case "View all departments":
                viewAllDepartments();
                break;

            case "View all roles":
                viewAllEmployeesByRole();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Update employee role":
                updateEmployeeRole();
                break;

        }
    });
}

function viewAllEmployees(){
    let query = 'SELECT * FROM employee';

    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });


};

function viewAllDepartments(){
    let query = 'SELECT * FROM department';

    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });    
};

function viewAllEmployeesByRole(){
    let query = 'SELECT * FROM role';

    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
};

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "First Name?",
            name: "addfirstname"
        },
        {
            type: "input",
            message: "Last Name?",
            name: "addlastname"
        },
        {
            type: "input",
            message: "Role ID?",
            name: "addroleid"
        },
        {
            type: "input",
            message: "Manager ID?",
            name: "addmanid"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.addfirstname, answer.addlastname, answer.addroleid, answer.addmanid], function(err, res) {
            if (err) throw err;
            console.table(res);
            init();
          });
        });
  

};

function addDepartment(){

    inquirer.prompt({
      
        type: "input",
        message: "Name of Department to add?",
        name: "deptname"

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            init();
        });
    });
};

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "Role title?",
            name: "title"
        },
        {
            type: "input",
            message: "Salary?",
            name: "salary"
        },
        {
            type: "input",
            message: "Department ID?",
            name: "deptID"
        }
    ]).then(function(answer){
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?)", [answer.title, answer.salary, answer.deptID] , function(err, res) {
            if (err) throw err;
            console.table(res)
            init();
        });

    })

};

function updateEmployeeRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of employee do you want to update?",
            name: "employeeFN"
        },
        {
            type: "input",
            message: "What is the last name of employee do you want to update?",
            name: "employeeLN"
        },
        {
            type: "input",
            message: "what role ID do you want to change the employee to?",
            name: "roleid"
        }
    ]).then(function(answer){
        connection.query("UPDATE employee SET role_id=? WHERE first_name=? AND last_name=?", [answer.employeeFN, answer.employeeLN, answer.roleid] , function(err, res) {
            if (err) throw err;
            console.table(res)
            init();
        });

    })

};