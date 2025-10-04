class Student {
    constructor(id, name, age, phone, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        if (age < 0) {
            console.log("Invalid age! Please input again!");  
        } else {
            this.age = age;         
        }
    }
}

let sA = new Student(1, "Tý", 18, "0901234567", "ty@gmail.com");
console.log(sA);
// sA.age = -19;
sA.setAge(-19);
console.log(sA);
console.log(sA.getAge());
