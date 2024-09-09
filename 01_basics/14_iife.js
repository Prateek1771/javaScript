// Immediately Invoced Function Expression (IIFE)

// used to execute a function quickly(immediately) such that it does not pollute the global scope values.
//

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')