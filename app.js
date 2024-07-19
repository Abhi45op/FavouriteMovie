const favMovie="avatar"
let guess=prompt("guess my favourtite movie");
while(guess!=favMovie){
    if(guess=="quite"){
        console.log("you quit");
        break;
    }
    guess=prompt("wrong guess.please try again");
}

if(guess==favMovie){
    console.log("congrats");
} else{
    console.log(" you quite")
}
