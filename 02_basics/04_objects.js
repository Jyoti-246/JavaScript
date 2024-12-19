// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "abc123"
tinderUser.name = "jyoti"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jyoti20@gmail",
    fullname: {
        userfullname: {
            firstname: "jyoti",
            lastname: "kedia"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "jyoti"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: constructor} = course
console.log(constructor);



