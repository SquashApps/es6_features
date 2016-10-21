
const expect = require('chai').expect;
const iterableObject = require('./iterator');
describe('Iterator ', () => {
	it('should iterate over the iterable object using for of', () => {
		let testArr = [];
		for(let val of iterableObject) {
			testArr.push(val);
		}
		expect(testArr).to.deep.equal(['BLUE', 'RED', 'PURPLE']);
	});


	it('should iterate over the iterable object for key value', () => {
		let testArr = [];
		let obj = {};
		for(let [index,element] of iterableObject.arr.entries()) {
			obj[index] = element;
		}
		expect(obj).to.deep.equal({
			0: 'BLUE',
			1: 'RED',
			2: 'PURPLE'
		});
	});
});