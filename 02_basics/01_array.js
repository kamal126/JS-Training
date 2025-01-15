// array
const myArr = [0,1,2,3,4,5];
const myHeros = ['batman', 'superman', 'spiderman', 'ironman', 'captain america'];

const myArr2 = new Array(0,1,2,3,4,5);

console.log(myArr);
console.log(myHeros);
console.log(myArr2);

// Accessing array elements
console.log(myArr[0]);
console.log(myHeros[1]);
console.log(myArr2[2]);

// Array length
console.log(myArr.length);
console.log(myHeros.length);
console.log(myArr2.length);

// Array methods
console.log(myArr.toString());
console.log(myHeros.toString());
console.log(myArr2.toString());

console.log(myArr.join(' - '));
console.log(myHeros.join(' - '));
console.log(myArr2.join(' - '));

// ------------------------------
// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);