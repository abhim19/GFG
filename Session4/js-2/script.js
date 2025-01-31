const user1 = {
  name: "Abhi",
  age: 24,
  phone: 2345667890,
  email: "abhi@gmail.com",
  print() {
    console.log(this.name + " is of age " + this.age);
  },
};
let unknown = "email";

// console.log(user1.email);
// console.log(user1[unknown]);

// Copy by Value
// let a = 10;
// let b = a;
// a = 20;
// console.log(b);

// Copy by Reference
// const user2 = user1;
// user1.email = "abc@gmail.com";
// console.log(user2[unknown]);

//Spread operator - ...      creates a copy and doesnt take the reference
const user2 = { ...user1 };
user1.email = "abc@gmail.com";
console.log(user1[unknown]);
console.log(user2[unknown]);

user2.print();
