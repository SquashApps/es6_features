
let Person = require('./person');

class Employee extends Person {
	constructor(firstName, lastName) {
		super(firstName, lastName);
	}

}

module.exports = Employee;