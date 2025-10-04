var objA = {id: 1, name: "Tý"};
var objB = objA;
console.log(objA);
console.log(objB);

objB.name = "Tèo";
console.log(objA);
console.log(objB);

objA.id = 2;
console.log(objA);
console.log(objB);
