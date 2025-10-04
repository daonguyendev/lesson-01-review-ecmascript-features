function testVar() {
    var a = 3; // -> hoisting

    if (a > 2) {
        var a = 5;
        console.log(a); //? -> 5
    }

    console.log(a); //? -> 5
}

testVar();