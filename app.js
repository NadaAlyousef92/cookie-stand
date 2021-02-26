"use strict";

let userName = prompt('What\'s your name?');
alert(userName + 'you are Welcome');
alert("Iam Nada website developer I hope you play gussing game with me by answering  questions yes or no");

let checkId = id();
let checkMajor = major();
let checkGender = myGender();
let checkUserAct = UserAct();
let checkAge = myAge();
let checkNumber = guessNumber();
let checkBrand = guessBrand();

function myAge() {
    let myAge = prompt("Iam I above 30 y.o.");
    if (myAge.toLowerCase() === "yes") {
        alert("no Iam less than 30!");
    } else if (myAge.toLowerCase() === "no") {
        alert("yes thats right");
    } else {
        alert("wrong input try again by yes or no");
    }
}

function myGender() {
    let myGender = prompt("Iam I a girl?");
    if (myGender.toLowerCase() === "yes") {
        alert("yes you are great!");
    } else if (myGender.toLowerCase() === "no") {
        alert("no Iam female!");
    } else {
        alert("wrong input");
    }
}


function UserAct() {
    let userAct = prompt("whould you like to be friends?");
    if (userAct.toLowerCase() === "yes") {
        alert("thank you nice to have you here");
    } else if (userAct.toLowerCase() === "no") {
        alert(" thank you for visiting my website");
    } else {
        alert("yes or no please!");
    }
    let userAge = prompt("How old are you ?");
    alert("Iam interested in communicate with this age");

    let userSelect = prompt("what color do you prefer?");
    alert("amazing its my favoriate too");
}

function id() {
    let myId = prompt("guss my nationality ?Iam I foreign girl?");
    if (myId.toLowerCase() === "yes") {
        alert("No Iam Middle eastern girl");
    } else if (myId === "no") {
        alert("thats right Iam jordanian");
    } else {
        alert("please try to answer yes or no!");
    }
    //console.log(myId);
}

function major() {
    let myMajor = prompt("Is my background proffissional in programing?");
    if (myMajor.toLowerCase() === "yes") {
        alert("unfortunately I studied different filed ");
    } else if (myMajor === "no"); {
        alert("yes you got me");
    }
    //console.log(myMajor);
}








//console.log(clothesBrand.length);
//console.log(clothesBrand);

function guessNumber() {
    let attempts = 4;
    let userInput = prompt("guss how many number inside my website from 0 to 10?");
    while (attempts) {
        if (userInput == 5) {
            alert("thats correct answer!!");
            break;
        } else if (userInput == 4 || userInput == 6) {
            alert("you are so close");
        } else if (userInput > 0 && userInput < 4) {

            alert("thats far a little bit");
        } else if (userInput > 6 && userInput <= 10) {
            alert("you get so far");
        } else {
            alert("wrong input please a value between 0 to 10");
        }
        attempts -= 1;
        userInput = prompt('plearse try again you have : ' + attempts + ' remaining for you');
        if (!attempts) {
            alert("wrong input");
        }
    }
}





function guessBrand() {




    let clothesBrand = ["bulgari", "barbarie", "channel", "mango", "lv", "zara"];


    console.log(clothesBrand);
    let attempts;
    let B;

    let myFevorate = prompt(' please name one of my favorite clothesBrand');


    for (let B = 5; B > 0; --B) {
        if (clothesBrand.includes(myFevorate)) {
            alert('thats true answer');
            alert('Thank you for participate of my gussing game');
            Score++
            break;
        } else {
            myFevorate = prompt('you have ' + (B) + ' attempts remaning');
        }
    }
    if (B = 1) {
        alert('this is my favorite clothes Brand  ("bulgari", "barbarie", "channel", "mango", "lv","zara"')
    }
    alert('thank you ' + userName + ' for visiting my web page');
    alert('you`r score is ' + Score + ' of 7');
}