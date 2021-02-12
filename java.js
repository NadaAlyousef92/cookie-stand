<<<<<<< HEAD

 "use strict";

 let userName=prompt('What\'s your name?');
 alert(userName + 'you are Welcome');

 
 alert("Iam Nada website developer I hope you play gussing game with me by answering  questions yes or no");

 let myAge =prompt("Iam I above 30 y.o.");

 if(myAge.toLowerCase()==="yes"){
   alert("no Iam less than 30!");
 }else if(myAge.toLowerCase()==="no"){
   alert("yes thats right");
 }else{
    alert("wrong input try again by yes or no");
 }

 let myGender=prompt("Iam I a girl?");
 if(myGender.toLowerCase()==="yes")
 {alert("yes you are great!");
 }else if(myGender.toLowerCase()==="no"){
 alert("no Iam female!");
 }else{alert("wrong input");}
 
 let myId=prompt("guss my nationality ?Iam I foreign girl?");
 if (myId.toLowerCase()==="yes"){
   alert("No Iam Middle eastern girl");
  }
 else if(myId.toLowerCase()==="no")
 {alert("thats right Iam jordanian");}
 else{alert("please try to answer yes or no!");
 }

 let myMajor=prompt("Is my background proffissional in programing?");
 if(myMajor.toLowerCase()==="yes")
 {alert("unfortunately I studied different filed ");
 }else if(myMajor.toLowerCase()==="no");
 {alert("yes you got me");
 }

 let userAct=prompt("whould you like to be friends?");
 if(userAct.toLowerCase()==="yes")
 {alert("thank you nice to have you here");
}else if(userAct.toLowerCase()==="no")
{alert(" thank you for visiting my website");
}else{alert("yes or no please!");
 }
 let userAge=prompt("How old are you ?");
 alert("Iam interested in communicate with this age");

 let userSelect=prompt("what color do you prefer?");
 alert("amazing its my favoriate too");
=======
"use strict";
let userName=prompt('What\'s your name?').toLocaleLowerCase();
 
alert(userName + 'you are Welcome!');
alert("I am Nada website developer I hope you play gussing game with me by answering  questions yes or no");

alert("you are welcome" + userName);
confirm("you won agift from my website contact my email to deliver it to your place ")

//..............................
age();
gender();
id();
major();
active();
guessNumber();
guessBrand();

function age(){
  let myAge=prompt("Iam I above 30 y.o.");

if(myAge==="yes"){
  alert("no Iam less than 30!");
}else if(myAge==="no"){alert("yes thats right");}else{alert("wrong input try again by yes or no");
}
console.log(myAge);
}

function gender(){
  let myGender=prompt("Iam I a girl?");
if(myGender==="yes"){alert("yes you are great!");}else if(myGender==="no"){alert("no Iam female!");}else{alert("wrong input");}
  console.log(myGender);
}
>>>>>>> a45a916fb9d570e765404f9770625f6eaebb3aad

function id(){
  let myId=prompt("guss my nationality ?Iam I foreign girl?");
if (myId==="yes"){alert("No Iam Middle eastern girl");}
else if(myId==="no"){alert("thats right Iam jordanian");}else{alert("please try to answer yes or no!");
}
  console.log(myId);
}

function major(){
  let myMajor=prompt("Is my background proffissional in programing?");
if(myMajor==="yes"){alert("unfortunately I studied different filed ");}else if(myMajor==="no");{alert("yes you got me");
}
  console.log(myMajor);
}

<<<<<<< HEAD
 if(userSug.toLowerCase()==="yes")
 {alert("please contact me on my direct Email:nada.alyousef92@gmail.com");
 }else{alert("thank you for your time have a nice day "); 
 }
=======
function active(){
  let userAct=prompt("whould you like to be friends?");
if(userAct==="yes"){alert("thank you nice to have you here");}else if(userAct==="no"){alert(" thank you for visiting my website");}else{alert("yes or no please!");
}
let userAge=prompt("How old are you ?");
alert("Iam interested in communicate with this age");
>>>>>>> a45a916fb9d570e765404f9770625f6eaebb3aad

let userSelect=prompt("what color do you prefer?");
alert("amazing its my favoriate too");

<<<<<<< HEAD
 alert("you are welcome" +userName);
 confirm("you won agift from my website contact my email to deliver it to your place ");
=======
let userTopic=prompt("What type of topics you interested in? ");
alert("thats great I will take it into considration ");
>>>>>>> a45a916fb9d570e765404f9770625f6eaebb3aad

let userSug=prompt("Do you have any suggestion or feedback about any services whould you like me to add?");

if(userSug==="yes"){alert("please contact me on my direct Email:nada.alyousef92@gmail.com");}else{alert("thank you for your time have a nice day "); 
}
  console.log(userAct,userAge,userSelect,userTopic);
}

function guessNumber(){
  let attempts=4;
let userInput=prompt("guss how many number inside my website from 0 to 10?");
while(attempts){
if(userInput==5){ alert("thats correct answer!!")
 break;
}
 else if(userInput==4 && userInput==6){alert("you are so close");
}
 else if(userInput>0 && userInput<4){

 alert("thats far a little bit");}

 if(userInput>6 && userInput<=10){alert("you get so far");}
 else{alert("wrong input please a value between 0 to 10");}

    
attempts-=1;
userInput=prompt('plearse try again you have : '+attempts+' remaining for you');
if(!attempts){
break;
  
 }
}





attempts=6;
let userInput2=prompt(" guss the clothesbrand please");
while(attempts){
for (let i=0;i<clothesBrand.length;i++){
if(userInput2===clothesBrand[i]){

alert("thats right answer!");
correct=false;
 break;
 }
 attempts-=1;
 userInput2=prompt('plearse try again you have : '+attempts+' remaining for you');
 if(!attempts){
 break;
    
 }
 }
 
 } 





 if(userInput==5){
   alert("thats correct answer!!")
   break;}
  else if(userInput==4 || userInput==6){alert("you are so close");}
  else if(userInput>=0 && userInput<4){
     alert("thats far a little bit");}

  else if(userInput>6 && userInput<=10){alert("you get so far");}
  else{alert("wrong input please a value between 0 to 10");}

  userInput=prompt('plearse try again you have : '+attempts+' remaining for you');
   attempts-=1;
  if(!attempts){
    alert('you run out of attempts\n the answer is: 5');
    break;}
}
}

function guessBrand(){
  let clothesBrand=['zara','barbarie','channel','mango','lv'];
console.log(clothesBrand.length);
console.log(clothesBrand);
let attempts=6;
 let userInput=prompt(" guss the clothesbrand please");
 while(attempts){
   for (let i=0;i<clothesBrand.length;i++){
     if(userInput===clothesBrand[i]){

       alert("thats right answer!");
       correct=true;
       break;
     }
     userInput=prompt('plearse try again you have : '+attempts+' remaining for you');
     attempts-=1;
      if(!attempts){
        alert('you run out of attempts\n the answer list is: '+clothesBrand);
        break;}

 }
}
}