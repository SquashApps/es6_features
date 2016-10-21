
const expect = require('chai').expect;
const Person = require('./person');
const Employee = require('./employee');
describe('Classes Test ', () => {
	it('should create a object of person ', () => {
		let p = new Person('FirstName', 'LastName');
		expect(p.firstName).to.eql('FirstName');
		expect(p.lastName).to.eql('LastName');
	});

	it('should inherit properties', function() {
		let e = new Employee('fname', 'lname');
		expect(e.firstName).to.eql('fname');
		expect(e.lastName).to.eql('lname');
	});
});