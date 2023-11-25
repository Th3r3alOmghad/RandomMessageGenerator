const messages = {
    message: [
     ["Whats is red and bad for your teeth? A Brick", "What side of the turkey has more feathers? The Inside."],
     ["Why are you here?", "Workaholoc much?", "Do you ever take a day off?"],
     ["You are amazing", "Thank you for coming to work!", "You are a god among men!"]
    ]
};

function randomArray(){
const firstIndex = messages.message[Math.floor(Math.random()* messages.message.length)];
let chooseArray1 = firstIndex;
//const secondIndex = messages.message[chooseArray1][Math.floor(Math.random()*messages.messages[chooseArray1])];
//let chooseArray2 = secondIndex.length;
let finalChoice = messages.message[chooseArray1];//[chooseArray2];
console.log(chooseArray1);
return finalChoice;
}

console.log(randomArray())
