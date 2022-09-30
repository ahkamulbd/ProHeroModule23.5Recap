// // Addition of Loop Elements:

// let sum = 0;

// for (i = 5; i > 0; i--) {
//     sum = sum + i;
// }

// console.log(sum);  // OUtput = 15;

// Recursion using sum of numbers

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);        // Output = 15;