let a = [1, 2, 3];
let b = [4, ...a, 5];
console.log(b);

let objA = {id: 1, name: "Tý"};
let objB = {age: 18, ...objA};
console.log(objB);

function sum(a, b, c) {
    return a + b + c;
}
let args = [3, 6, 7];
console.log(sum(...args));

