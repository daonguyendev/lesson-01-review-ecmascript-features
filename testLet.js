function testLet() {
  let a = 3;

  if (a > 2) {
    let a = 5;
    console.log(a); // -> 5
  }

  console.log(a); // -> 3
}

testLet();
