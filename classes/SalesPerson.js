//import the Employee Class
const { Employee } = require("./Employee.js");

//create class SalesPerson that extends Employee
class SalesPerson extends Employee {
  #totalSales;
  constructor(name, position, salary, clients) {
    super(name, position, salary);
    this.clients = clients;
    this.#totalSales = 0;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
// const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, [
//   "Vine",
//   "MySpace",
//   "Shutterfly",
// ]);
// console.log(malik.getSalesNumbers()); // 0
// malik.makeSale(10500);
// malik.makeSale(20000);
// console.log(malik.getSalesNumbers()); // 30500
