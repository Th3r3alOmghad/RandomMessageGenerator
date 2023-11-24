const messages = {
    jokes:["Whats is red and bad for your teeth? A Brick", "What side of the turkey has more feathers? The Inside."],
    script:["Good to see you", "Welcome Back!", "Do you ever take a day off?"]
};
const randomMessage = messages[Math.floor(Math.random() * messages.length)];

function messageAtRandom() {
    if (randomMessage === 0){
        return messages.jokes[Math.floor(Math.random() * messages.jokes.length)];
    }
    else{
        return messages.script[Math.floor(Math.random() * messages.script.length)];
    }
}
console.log(messageAtRandom());