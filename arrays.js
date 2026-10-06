const prompt = require(`prompt-sync`)();


//NUMBER 1
// function max(...numbers){
// 	let result = -Infinity;
// 	for(let number of numbers){
// 		if(number>result) result = number;
// 	}
// 	return result;
// }
// console.log(max(4, 1, 9, -2));

//NUMBER 2

// let num1 = Number(prompt("State a number to be reversed: "))
// let result = num1.toString().split('').reverse().join('');
// console.log(result)

//Note to self: ".toString" converts the number to a string, ".split" converts the numbers to individuals, ".reverse" reverses the elements of the string, ".join" joins them all together again
//PUT IT IN OBSIDIAN

//NUMBER 3

// function uppercase(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i + 1, str.length)
//         }
//     }
//     return str
// }
// console.log(uppercase("your mom"))

//NUMBER 4

// function silly(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i + 1, str.length)
//         }
//         else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//             str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) + 32) + str.slice(i + 1, str.length)
//         }
//     }
//     return str
// }
// console.log(silly("yoUr mom"))