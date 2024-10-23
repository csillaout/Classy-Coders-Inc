const { Employee } = require("./Employee")

class SoftwareEngineer extends Employee {
    #languages;
    constructor(name, position, salary, languages) {
        super(name, position, salary);
        this.#languages = languages; // Basic init
    }

    getProgrammingLanguages() {
        return this.#languages;
    }

    setProgrammingLanguages(newLanguage) {
        this.#languages.push(newLanguage); // Add new language to list
    }
}

module.exports = {
    SoftwareEngineer,
}