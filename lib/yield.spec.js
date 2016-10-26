
const expect = require('chai').expect;
const yieldFunc = require('./yield');
describe('Yield ', () => {
	it('should iterate using the yield and the function* functionality', () => {
		var arr = [];
		for(let val of yieldFunc()) {
			arr.push(val);
		}
		expect(arr).to.deep.equal([1,3,5,7]);
	});
});