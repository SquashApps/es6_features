
class Person {

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}

	set firstName(name) {
		this._firstName = name;
	}

	set lastName(name) {
		this._lastName = name;
	}
}



module.exports = Person;