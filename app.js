"use strict";



function myName() {
    let userName = prompt('What\'s your name?');

    alert(userName + '  you are Welcome!');
    alert("I am Nada website developer I hope you play gussing game with me by answering  questions yes or no");

    alert("you are welcome" + userName);
    confirm("you won agift from my website contact my email to deliver it to your place ")

    console.log(userName);
}
myName();

function age() {
    let myAge = prompt("Iam I above 30 y.o.").toLowerCase();

    if (myAge === "yes") {
        alert("no Iam less than 30!");
    } else if (myAge === "no") { alert("yes thats right"); } else {
        alert("wrong input try again by yes or no");
    }
    console.log(myAge);
}

age();

function gender() {
    let myGender = prompt("Iam I a girl?").toLowerCase();
    if (myGender === "yes") { alert("yes you are great!"); } else if (myGender === "no") { alert("no Iam female!"); } else { alert("wrong input"); }
    console.log(myGender);
}
gender();

function id() {
    let myId = prompt("guss my nationality ?Iam I foreign girl?").toLowerCase();
    if (myId === "yes") { alert("No Iam Middle eastern girl"); } else if (myId === "no") { alert("thats right Iam jordanian"); } else {
        alert("please try to answer yes or no!");
    }
    console.log(myId);
}
id();

function major() {
    let myMajor = prompt("Is my background proffissional in programing?").toLowerCase();
    if (myMajor === "yes") { alert("unfortunately I studied different filed "); } else if (myMajor === "no"); {
        alert("yes you got me");
    }
    console.log(myMajor);
}
major();

function active() {
    let userAct = prompt("whould you like to be friends?").toLowerCase();
    if (userAct === "yes") { alert("thank you nice to have you here"); } else if (userAct === "no") { alert(" thank you for visiting my website"); } else {
        alert("yes or no please!");
    }

    let userSug = prompt("Do you have any suggestion or feedback about any services whould you like me to add?");

    if (userSug === "yes") { alert("please contact me on my direct Email:nada.alyousef92@gmail.com"); } else {
        alert("thank you for your time have a nice day ");
    }

}
active();




function gussNumber() {
    let attempts = 0;
    let noAttempts = false;
    const num = 19;
    while (attempts < 4) {
        let guess = prompt('Can you guess a number between 0 and 20?');
        if (guess > num) {
            alert('That\'s too close!');
        } else if (guess < num) {
            alert('That\'s too far!');
        } else if (guess == num) {
            alert('thats true good job.');
            noAttempts = true;
            score++;

        }
        attempts++;
    }
    if (!noAttempts) {
        alert('Sorry, you ran out of attempts the correct number is 19');
    }
}
gussNumber();

function guessBrand() {
    let clotherBrands = ['zara', 'barbarie', 'channel', 'mango', 'lv'];


    console.log(clotherBrands);
    let score;
    let b;

    let myFevorate = prompt('please name one of my favorite clothes brand');


    for (let b = 5; b > 0; --b) {
        if (clotherBrands.includes(myFevorate)) {
            alert('thats true answer');
            alert('Thank you for participate in my gussing game');
            score++
            break;
        } else {
            myFevorate = prompt('you have ' + (b) + ' attempts remaning');
        }
    }
    if (b = 1) {
        alert('this is my favorite clothes brand (zara , barbarie , channel , mango , lv)')
    }
    alert('thank you ' + userName + ' for visiting my web page');
    alert('you`r score is ' + score + ' of 7');
}
guessBrand();