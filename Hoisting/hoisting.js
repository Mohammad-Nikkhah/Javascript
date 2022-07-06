// declare variable by hoisting
count = 15 ;
if (count > 10) {
    console.log("Great")
}
var count;

// hoisting in function 

// use welcome function before declare

welcome("Mohammad-nikkha");

function welcome(username) {
    console.log(`hi ${username}`)
} 


