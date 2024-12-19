function sayMyName(){
    console.log("J");
    console.log("Y");
    console.log("O");
    console.log("T");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// function addTwoNumbers(num1, num2){
//     const res = num1 + num2;
//     return res;
// }

function addTwoNumbers(num1, num2){
    return  num1 + num2;
}
const res = addTwoNumbers(4, 6);
// console.log(res);

function loginUserMessage(username = 'sam'){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jyoti"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    name: "jyoti",
    price: "199"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    name: "kedia",
    price: "12345"
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 500, 700, 200]));




