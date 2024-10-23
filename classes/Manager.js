const { Employee } = require("./Employee.js");

class Manager extends Employee {
  #employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = [];
  }
  
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  
  setEmployeesManaged(employee) {
    if (employee instanceof Employee) {
      this.#employeesManaged.push(employee);
    } else {
      console.error(
        "The employee being added must be an instance of the Employee class"
      );
    }
  }

}

module.exports = {
  Manager,
};

// const jenna = new Manager(
//   "Jenna",
//   "Head of Engineers",
//   120000,
//   "Software Engineering"
// );
// console.log(jenna.getEmployeesManaged()); // []

// const preston = new Employee("Preston", "Engineer", 100000);
// jenna.addEmployeeManaged(preston);
// console.log(jenna.getEmployeesManaged()); // [ Employee { name: 'Preston', position: 'Engineer' } ]
