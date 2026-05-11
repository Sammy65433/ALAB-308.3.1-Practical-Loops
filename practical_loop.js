// Practical Loops



// Objectives
// Use for loops to iterate a specific number of times.
// Use for of loops to iterate through iterable data-like strings.
// Use while loops to iterate based on a condition.
// Use the break and continue statements to control loop flow.

// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. 
// There are a few different ways to do this - experiment with 
// what you think is the most efficient. Once you have solved 
// the problem, ask yourself if there could be another way; 
// and if so, would it be better.
// Accomplish the following:

// Loop through all numbers from 1 to 100.

// If a number is divisible by 3, log “Fizz.”

// If a number is divisible by 5, log “Buzz.”

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

// If a number is not divisible by either 3 or 5, log the number.

// If a number is not divisible by either 3 or 5, log the number.

// Part 1

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0)
        if (i % 5 == 0)
            console.log('Fizz Buzz');
        else
            console.log('Fizz');
    else if (i % 5 == 0)
        if (i % 3 == 0)
        console.log(`Fizz Buzz`);
        else{
        console.log(`Buzz`);
        }
     else
        console.log(i);
    
}

// Remember to commit your solution once it is working.

// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that 
// cannot be exactly divided by any whole number other than itself
//  and 1. For example, the number 5 is prime because it cannot 
// be divided by 4, 3, or 2; it can only be divided by itself (5) 
// and 1. Similarly, the numbers 7 and 11 are prime. 
// As numbers become larger, determining whether or not they are 
// prime is increasingly difficult, but loops make this process 
// relatively easy!

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// Prime Numbers 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
// 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// Cant be divided by any thing other than 1 and itself

let n = 15;
console.log(`Starting number: ${n}`);


for (let i = n + 1; ; i++) {
    
    let isPrime = true; // assume the number is prime until we find 
    // a divisor
    for (let j = n - 1; j >= 2; j--) {
        // check if i is divisible by any number from n-1 down 
        // to 2
        if (i % j === 0) {
            isPrime = false; // if i is divisible by j, it is not 
            // prime
            break; // if i is divisible by any number other than 1 and 
            // itself, it is not prime, so we break out of the 
            // inner loop

   
    }
}
if (isPrime === true) {
    console.log(`Next prime number: ${i}`);
    break; // if we find a prime number, we log it and 
    // break out of the outer loop
}

}
// Part 3

// As a final task, solve the following practical problem 
// regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is 
// traditionally used to store tabular data. You may be familiar 
// with CSVs through past use of programs such as Microsoft Excel 
// or Google Sheets. While each of these programs save their data 
// in different formats to preserve style (e.g., font color or cell 
// backgrounds), at their core, they are storing CSV data.
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26


const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
console.log(`CSV Data:\n${csvData}\n`);
console.log('--- Parsing rows ---');

// Store each “cell” of data.
//4 players on the floor 
let cell1 = "";   //PG
let cell2 = "";  //SG
let cell3 = "";  //SF
let cell4 = "";   //PF
let currentCell = "";   //active column.  //The ball being passed around while a player is still dribbling (adding letters).
let cellNumber = 1;  //Index (1‑4) that tells which column we are filling. Which player has the ball


for (let i = 0; i < csvData.length; i++) {
    const char = csvData[i];   // store the current character in a variable 
 

    if (char === ',') {  // store the current cell 
    // data in the appropriate variable based on the cell number
        
        if (cellNumber === 1) {  // store the current cell data in cell1
            cell1 = currentCell;
        } else if (cellNumber === 2) { // store the current cell data in cell2
            cell2 = currentCell;
        } else if (cellNumber === 3) {   //store the current cell data in cell3
            cell3 = currentCell;
        }
        currentCell = "";
        cellNumber++;
        continue; // move to the next character after processing a comma
    } if (char === '\n') {
        cell4 = currentCell;   //4th cell is stored when we encounter a new line character
        console.log(`Row: ${cell1}, ${cell2}, ${cell3}, ${cell4}`); 
        //  log the current row data and reset the cell variables for 
        // the next row
        cell1 = cell2 = cell3 = cell4 = "";   // reset all cell variables
        currentCell = "";
        cellNumber = 1;
        continue; // move to the next character after processing a new line
     }
     currentCell += char; // add the current character to the current cell data
    }
    if (currentCell !== "") { // if there is any remaining cell data after the loop, log it as the last row
        cell4 = currentCell; // store the last cell data in cell4
        console.log(`Row: ${cell1}, ${cell2}, ${cell3}, ${cell4}`); // log the last row data
    }

// NBA‑style pseudocode***********************************************************************
// FOR each symbol in the playbook
//     IF symbol is a pass (',')
//         SAVE the current dribble (currentCell) to the player who just finished (cell1‑cell3)
//         CLEAR dribble buffer
//         MOVE ball to next player (cellNumber++)
//     ELSE IF symbol is end‑of‑play ('\n')
//         SAVE the final dribble to the fourth player (cell4)
//         ANNOUNCE the completed line‑up (log the row)
//         RESET all players and ball for next play
//     ELSE
//         ADD symbol to current dribble (currentCell)
// END FOR

// IF there is still a dribble left after the loop
//     SAVE it to the fourth player and announce the final line‑up
// ********************************************************************************




// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:



// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. 
// Once you are confident it is working correctly, try the following 
// string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

// console.log(`CSV Data: ${csvData}`);}
