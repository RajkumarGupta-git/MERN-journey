let favMovie="Fighter";
let guess=prompt("Guess my Favorite Movie");

while((guess!=favMovie) && (guess != 'quit')){
    guess=prompt("Wrong please try Again !");
}

if(guess== favMovie){
    console.log("Congrats !!");
}
else{
    console.log("You quit the Game.")
}