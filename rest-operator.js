const [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

const {id, ...info} = {id: 1, name: "Tý", age: 18};
console.log(id);
console.log(info);

function sum(...params) {
    return params.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));


