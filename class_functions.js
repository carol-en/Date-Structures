function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

let user1 = new User("John", "Smith", 25, "male");

console.log(user1);