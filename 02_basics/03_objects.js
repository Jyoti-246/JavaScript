// singleton
// object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "jyoti",
    age: "18",
    [mySym]: "mykey1",
    location: "jaipur",
    email: "jyoti203@gmai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)

jsUser.name = "kedia"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
