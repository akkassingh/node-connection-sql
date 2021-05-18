module.exports = app => {
    const employee = require("../controllers/employee.controller.js");
  
    // Retrieve all Employees
    app.get("/employee", employee.findAll);
        
    // Create a new Employees
    app.post("/employee", employee.create);
  
    // Retrieve a single Employee with employee_id
    app.get("/employee/:employeeId", employee.findOne);

  };