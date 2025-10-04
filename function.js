// ES5
function sumAB(a, b) {
    return a + b;
}
console.log(sumAB(1, 1));

// ES6
const totalAB = (a, b) => a + b;
console.log(totalAB(2, 2));

// Viết 1 chương trình kiểm tra 1 số nguyên 
// có phải là số chẵn hay không (ES6)?
// Input: 1 số nguyên n
// Process: kiểm trả số chẵn
// Output: kết quả kiểm tra (true/false)
// function isEvenNumber(n) {
//     if (n % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEvenNumber(4));

const isEvenNumber = n => n % 2 == 0;

console.log(isEvenNumber(14));
