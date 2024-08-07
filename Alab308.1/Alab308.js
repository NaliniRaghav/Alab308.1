// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;
// Check if all numbers are divisible by 5. Cache the result in a variable.
// Check if the first number is larger than the last. Cache the result in a variable.
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

let Result = 0;
Result = n1 % 5;
if (Result === 0) console.log("The number " + n1 + " is divisible by 5 ");
Result = n2 % 5;
if (Result === 0) console.log("The number " + n2 + " is divisible by 5 ");
if (Result === 0) console.log("The number " + n3 + " is divisible by 5 ");

if (Result === 0) console.log("The number " + n4 + " is divisible by 5 ");

//* To check n1 is larger than n2
let n1greaterthann2 = true;

n1greaterthann2 = n1 > n4;
console.log(n1greaterthann2);
if (n1greaterthann2) {
  console.log(
    "The first number " + n1 + " is larger than the last number " + n4
  );
} else {
  console.log(
    "The first number " + n1 + " is not larger than the last number " + n4
  );
}

//*Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number. //

let R1 = 0;
let R2 = 0;
let R3 = 0;

R1 = n2 - n1;
R3 = R1 * n3;
R4 = R3 % n4;
console.log(
  "n1,n2,n3,n4 are " + n1 + "," + n2 + "," + n3 + "," + n4 + " respectively"
);

console.log("Second number - first number = " + R1);
console.log("Multiplying the above result by n3 is " + R3);
console.log(
  "Dividing the above result by " + n4 + ", gives the remainder " + R4
);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const areAll25OrLess = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

console.log("Renamed variable is  areall250rLess");
// ------------------------------------------------------------------
// Known values given in the question
let Miles = 1500;

let MPH1 = 55;
let MPH2 = 60;
let MPH3 = 75;

let MPG1 = 30; //miles per gallon when 55 miles per hour
let MPG2 = 28; //miles per gallon when 60 miles per hour
let MPG3 = 23; //miles per gallon when 75 miles per hour

let costPerGallon = 3;

// Calculations

// Bullet 1
gallonsTotal1 = Miles / MPG1;
gallonsTotal2 = Miles / MPG2;
gallonsTotal3 = Miles / MPG3;

console.log("when 55 miles per hour " + gallonsTotal1 + " gallons needed");
console.log("when 60 miles per hour " + gallonsTotal2 + " gallons needed");
console.log("when 75 miles per hour " + gallonsTotal3 + " gallons needed");

// Bullet 2
let cost1 = gallonsTotal1 * costPerGallon;
let cost2 = gallonsTotal2 * costPerGallon;
let cost3 = gallonsTotal3 * costPerGallon;

if (cost1 <= 175) {
  console.log("when 55 miles per hour, the budget will be enough");
} else {
  console.log("when 55 miles per hour, the budget will not be enough");
}
if (cost2 <= 175) {
  console.log("when 60 miles per hour, the budget will be enough");
} else {
  console.log("when 60 miles per hour, the budget will not be enough");
}
if (cost3 <= 175) {
  console.log("when 75 miles per hour, the budget will be enough");
} else {
  console.log("when 75 miles per hour, the budget will not be enough");
}

// Bullet 3
let hoursTotal1 = Miles / MPH1;
let hoursTotal2 = Miles / MPH2;
let hoursTotal3 = Miles / MPH3;

console.log(
  "It will take " + hoursTotal1 + " hours when travelled 55 miles/hour"
);
console.log(
  "It will take " + hoursTotal2 + " hours when travelled 60 miles/hour"
);
console.log(
  "It will take " + hoursTotal3 + " hours when travelled 75 miles/hour"
);
