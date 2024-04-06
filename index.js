#! /usr/bin/env node
// ----------------Problem-----------------------
//Q2: - Take the user age.
//   -- If the age is 18 or above:
//   -- Ask if they have a nationality of "Pakistani".
//     ---If yes, print "You are eligible to vote."
//     ---If no, print "Please obtain a valid ID to vote."
// -----------------Solution-----------------------
//  For taking input from user Inquirer is imported
import inquirer from "inquirer";
// again function is defined and will be called to ask user to run program again
async function again() {
    const doAgain = await inquirer.prompt([{
            name: "another",
            type: "string",
            message: "Do you want to test another person data? enter 'y' for yes and enter anyother key otherwise "
        }]);
    if (doAgain.another == "y") {
        return true;
    }
    else {
        return false;
    }
}
console.log("This program tells user whether the person is");
console.log("a Valid voter in Pakistan or Not");
console.log("For a valid voter in Pakistan:Age must be 18 or above and");
console.log("Nationality must be Pakistani.");
console.log("Please enter Age and Nationality of the Person!");
// againValue will be used to store the response of user in boolen that will be used to iterate the loop
var againValue = true;
do {
    var personData = await inquirer.prompt([
        {
            name: "age",
            type: "number",
            message: "Age:",
        },
        {
            name: "nationality",
            type: "string",
            message: "Nationality:",
        },
    ]);
    if ((personData.age < 0) || (isNaN(personData.age))) {
        // console.log(personData.age, personData.nationality)
        console.log("Please Enter Valid age");
        continue;
    }
    else if (!isNaN(personData.nationality)) {
        // console.log(personData.age, personData.nationality);
        console.log("Please Enter Valid Nationality");
        continue;
    }
    else {
        console.log(personData.age, personData.nationality);
        if (personData.nationality.toUpperCase() != "PAKISTANI") {
            // console.log(personData.nationality.toUpperCase())
            console.log("This person is not a Pakistani National, so not a Valid Voter in Pakistan");
            againValue = await again();
        }
        else if (personData.age < 18) {
            console.log("Person's age is less than 18 so this person is not a valid voter");
            againValue = await again();
        }
        else {
            console.log("Valid Voter");
            againValue = await again();
        }
    }
} while (againValue);
