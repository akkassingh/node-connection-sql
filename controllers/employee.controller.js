const Employee = require("../models/employee.model");

// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create Employee
    const employee = new Employee({
      email: req.body.email,
      name: req.body.name,
      active: req.body.active
    });
  
    // Save Employee
    Employee.create(employee, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employee record."
        });
      else res.send(data);
    });
  };

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Employee data."
        });
      else res.send(data);
    });
  };

// Find a single Employee with a employee_id
exports.findOne = (req, res) => {
    Employee.findById(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Employee not found with id ${req.params.employeeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving employee with id " + req.params.employeeId
          });
        }
      } else res.send(data);
    });
  };