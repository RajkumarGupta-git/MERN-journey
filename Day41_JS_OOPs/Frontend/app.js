// let arr=[1,2,3];
// let arr2=[10,20,30];
// arr.sayHello =() => {
//     console.log("Hello , I am Array");
// };

// arr2.sayHello =() => {
//     console.log("Hello , I am Array two .");
// };


// function Person(name, age){
//     this.name =name;
//     this.age =age;
//     // console.log(this);

// }

// Person.prototype.talk =function() {
//     console.log(`Hi, My name is  ${this.name}`);
// };

// let p1 =new Person("Ram", 20);
// let p2 =new Person("shyam", 22);


// class Person {
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, MY name is ${this.name}`);
//     }
// }
// let p1 =new Person("Ram", 20);
// let p2 =new Person("shyam", 22);


// Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        // this.name = name;
        // this.age = age;

        super(name, age);
        this.marks = marks;
    }

    // talk() {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}

let stu1 = new Student("Raj", 21, 96);

class Teacher extends Person {
    constructor(name, age, subject) {
        // this.name = name;
        // this.age = age;

        super(name, age);
        this.subject = subject;
    }

    // talk() {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}

let teacher1 = new Teacher("Amit", 35, "JavaScript");

console.log(stu1);
stu1.talk();

console.log(teacher1);
teacher1.talk();