//Making a container for values to appear in the first table
let calculations = [];
//Setting up a container for non erroneus results only
let nonError = [];
//if it is a valid entry then continue looking for entries
let newEntry = true;
while (newEntry){
    let xValue = prompt("First number please");
    if (xValue ===null){
        break;
    }


let yValue = prompt("Second number please");
    if (yValue ===null){
        break;
    }
let operation = prompt("Please choose an arithmetic operator: +, -, *, /, %");
if (operation === null){
    break;
}
//Sets those inputs as numbers
let x = Number(xValue);
let y = Number(yValue);

let response;
let entry = false;
//first check is to confirm they are both numbers
if (isNaN(x) || isNaN(y)){
    response = "Please input an integer";
}
//Setting up the operations and their behavior
else{
    switch (operation){
        case "+":
            response = x + y;
            entry = true;
            break;
    



    case "-":
            response = x-y;
            entry = true;
            break;
    




    case "*":
            response = x*y;
            entry = true;
            break;
    




    case "/":
        if (y === 0){
            response = "Infinity"
        }
        else{
            response = x/y;
            entry = true;
            
    }
    break;
case "%":
    if (y === 0){
        response = "Infinity";
    }
    else{
        response = x % y;
        entry = true;
    }
}
    if (entry === false && response === undefined) {
    response = "Computation error";
}
}


//Puts the complete entry into the calculations container
calculations.push([xValue, operation, yValue, response]);

//Only puts correct results into the nonError container
if (entry === true) {
    nonError.push(response);
}

//The Ok button continues the calculator and Cancel ends the calculator
newEntry = confirm("Press OK to enter another calculation or Cancel to finish");
}

//Start of the first table
document.write("<h2>Calculator Results</h2>");
document.write("<table>");

document.write(
    "<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>"
);

//Goes through the calculations container and makes one row per entry
for (let i = 0; i < calculations.length; i++) {
    document.write(
        "<tr><td>" + calculations[i][0] +
        "</td><td>" + calculations[i][1] +
        "</td><td>" + calculations[i][2] +
        "</td><td>" + calculations[i][3] +
        "</td></tr>"
    );
}

document.write("</table>");

//Starting values for the summary at the end
let minimum = "N/A";
let maximum = "N/A";
let average = "N/A";
let total = "N/A";

//Only calculates the summary for valid
if (nonError.length > 0) {
    minimum = nonError[0];
    maximum = nonError[0];
    total = 0;

    for (let i = 0; i < nonError.length; i++) {
        if (nonError[i] < minimum) {
            minimum = nonError[i];
        }
        if (nonError[i] > maximum) {
            maximum = nonError[i];
        }
        total = total + nonError[i];
    }
    average = total / nonError.length;
}

//Start of the summary table
document.write("<h2>Summary Table</h2>");
document.write("<table>");

document.write(
    "<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>"
);

document.write(
    "<tr><td>" + minimum + "</td><td>" + maximum + "</td><td>" + average + "</td><td>" + total + "</td></tr>"
);
document.write("</table>");