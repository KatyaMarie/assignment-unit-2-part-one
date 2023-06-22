// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
//initializing variable (string)
let firstName = 'katya';
//Check the value of firstName, will it return 'katya' ?
console.log('First name of this student is: ' + firstName + ' - lowercase is preferred');

// 2 - Create a second variable called `lastName` and assign it the value of your last name
//initializing variable (string)
let lastName = ' vesely';
//Check the value of lastName, will it return 'vesely' ?
console.log('Prime student\'s last name is: ', lastName );
// showing full name of student, one way
console.log('this Prime Digital Academy student\'s full name is: ' + firstName + lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
//initializing variable (string)
let fullName = firstName + lastName;
console.log('this Prime Digital Academy student\'s full name is:', fullName);

// 4 - Console log the value of `fullName`
// completed above but here it is again:
console.log('this Prime Digital Academy student\'s full name is:', fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 8;
console.log('what is my lucky number?:', 8);

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('Hello my name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!');

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'mangoes';

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of  pets your friend has
let friendsPets = 30;

// 11 - Add two pets to your `pets` variable
pets = pets+=30;
console.log('you have ' + pets + ' pets');


// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 555;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

if(adventurous==true){
    console.log('this person surely is adventurous! ˚₊‧꒰ა ☆ ໒꒱ ‧₊˚');
} 
else{
    console.log('most adventures involve this person being at home ૮꒰⸝⸝>  ̫ <⸝⸝꒱ა');
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if(luckyNumber = 2 && adventurous == true){
    console.log('Roll the dice baby!!');
}else{
    console.log('You may not roll the dice, today is not your lucky day :(');
}


// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if(pets < allowedPets){
    console.log('You are allowed to have more pets');
} else if(pets == allowedPets){
    console.log('You have the maximum amount of pets. The number of pets you have is enough');
} else {
    console.log('You have too many pets, oh no!');
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

let congratulations = 'congratulations, on having the most pets!';
let friendWins = true;
let youWin = true;
let morePets = 'message to say who has the most pets';

if(pets > friendsPets && youWin == true ){
    console.log('You have more pets than your friend.', congratulations);
    morePets = 'After counting, it appears you have more pets than your friend.';
    friendWins = false;
} else if(friendsPets > pets && friendWins == true){
    console.log('Your friend has more pets than you', congratulations);
    morePets = 'After counting, it appears your friend has more pets than you';
    youWin = false;
} else {
    console.log('Wow you have the exact same number of pets. Cute!');
    friendWins = true;
    youWin = true;
    morePets = 'you both have the same amount of pets';
}


console.log(morePets);


// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// I know how switch statements works so I will pass on this opportunity. Thank you. 

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

const adventureIndex = 
adventurous == true ? "It is great you are adventurous!" : "Don't forget to get some vitamin D!";
console.log(adventureIndex);