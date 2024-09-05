"use strict";
function createPerson(filstName, lastName, age) {
    return {
        filstName,
        lastName,
        age,
        greet: function () {
            return `Hello,my name is${this.filstName} ${this.lastName} and  I am ${this.age} years old`;
        }
    };
}
const person = createPerson('John', 'Doe', 30);
console.log(person.greet());
