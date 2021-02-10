
"use strict";

let userName=prompt('What\'s your name?');
 
alert(userName + 'you are Welcome!');

 
 alert("Iam Nada website developer I hope you play gussing game with me by answering  questions yes or no");

 let myAge=prompt("Iam I above 30 y.o.");

 if(myAge==="yes"){
   alert("no Iam less than 30!");
 }else if(myAge==="no"){alert("yes thats right");}else{alert("wrong input try again by yes or no");
 }

 let myGender=prompt("Iam I a girl?");
 if(myGender==="yes"){alert("yes you are great!");}else if(myGender==="no"){alert("no Iam female!");}else{alert("wrong input");}
 
 let myId=prompt("guss my nationality ?Iam I foreign girl?");
 if (myId==="yes"){alert("No Iam Middle eastern girl");}
 else if(myId==="no"){alert("thats right Iam jordanian");}else{alert("please try to answer yes or no!");
 }

 let myMajor=prompt("Is my background proffissional in programing?");
 if(myMajor==="yes"){alert("unfortunately I studied different filed ");}else if(myMajor==="no");{alert("yes you got me");
 }

 let userAct=prompt("whould you like to be friends?");
 if(userAct==="yes"){alert("thank you nice to have you here");}else if(userAct==="no"){alert(" thank you for visiting my website");}else{alert("yes or no please!");
 }
 let userAge=prompt("How old are you ?");
 alert("Iam interested in communicate with this age");

 let userSelect=prompt("what color do you prefer?");
 alert("amazing its my favoriate too");

 let userTopic=prompt("What type of topics you interested in? ");
 alert("thats great I will take it into considration ");

 let userSug=prompt("Do you have any suggestion or feedback about any services whould you like me to add?");

 if(userSug==="yes"){alert("please contact me on my direct Email:nada.alyousef92@gmail.com");}else{alert("thank you for your time have a nice day "); 
 }

 console.log(userName,myAge,myGender,myId,myMajor,userAct,userAge,userSelect,userTopic);

 alert("you are welcome" + userName);
 confirm("you won agift from my website contact my email to deliver it to your place ");

 for(let i=0;i<=10;i++){
 
 let noOfbrands=prompt("How many brands do you like?");
 if(noOfbrands<=5){alert("Thats too low number of brands");}else if(noOfbrands>5<=10){alert("Thats too normal you are perfect");}else if(noOfbrands>10){alert("Thats too high number of brands");}else{alert("Wrong input");}
 }
