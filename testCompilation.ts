
const input1 = prompt("please insert the first number");
const  input2 = prompt("please enter the second numnber");
let text = "";

function sum1( input1: number, input2: number) {

    return input1 + input2;
};

if (input1 === null || input2 === null) {
    text = "Operation cancelled";    
   }

else if (isNaN(parseFloat(input1 || "")) || isNaN(parseFloat(input2 || "")
)) {
    text = "One of the inputs is not a valid number";
}
else {
   text =  `the sum of ${parseFloat(input1 || "")} and ${parseFloat(input2 || "")} is ${sum1( parseFloat(input1 || ""), parseFloat(input2 || ""))}`
}


alert(text);
