class Employee {
  // Private fields
  #salary;
  #isHired;

  // Static fields
  static allEmployees = [];

  // Static methods
  static getEmployees() {
    return Employee.allEmployees;
  }

  static getTotalPayroll() {
    let total = 0;
    for(let worker of Employee.allEmployees) {
      total += worker.getSalary();
    }
    return total;
  }

  constructor(name, position, salary) {
    this.name = name; // Public field
    this.position = position; // Public field
    this.#salary = salary; // Private field
    this.#isHired = true; // Private field, default is true
    Employee.allEmployees.push(this);
  }

  // Method to get the salary of the employee
  getSalary() {
    return this.#salary;
  }

  // Method to set the salary of the employee
  setSalary(amount) {
    this.#salary = amount;
  }

  // Method to get the status of the employee (isHired)
  getStatus() {
    return this.#isHired;
  }

  // Method to update the status (isHired)
  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }
}

// // Example usage
// const preston = new Employee("Preston", "Engineer", 100000);
// console.log(preston.getSalary()); // 100000
// preston.setSalary(105000);
// console.log(preston.getSalary()); // 105000
// console.log(preston.getStatus()); // true
// preston.setStatus("fire");
// console.log(preston.getStatus()); // false

module.exports = { Employee };
