const user = {
    username: "jyoti",
    price: 188,
    
    message: function(){
        // console.log(`${this.username}, welcome`);
        
    }
}

user.message();

function one(){
    let username = "jyoti"
    // console.log(this);
}

one();

const chai = function(){
    let username = "hitesh";
    // console.log(this);
}

chai()

const ch = () => {
    let username = "hitesh";
    // console.log(this);
}

ch()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "jyoti"});
console.log(addTwo(3, 6));
