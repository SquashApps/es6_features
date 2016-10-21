/*
	Creating a iterable object
*/

let iterableObj = {
	index:0,
	arr: ['BLUE', 'RED', 'PURPLE'],
	[Symbol.iterator]() {
		return this;
	},
	next() {
		if (this.index < this.arr.length) {
			return {
				'done': false,
				'value': this.arr[this.index++]
			}
		} else {
			return {
				'done': true
			}
		}
	}

};



module.exports = iterableObj;