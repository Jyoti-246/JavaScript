// Immediately Invoked Function Exressions (IIFE)

// first () for defintion and second () for execution
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// after iife ; is compulsory

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);

} )("jyoti")