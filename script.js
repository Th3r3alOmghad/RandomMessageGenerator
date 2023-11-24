const messages = {
    message: [
     ["Whats is red and bad for your teeth? A Brick", "What side of the turkey has more feathers? The Inside."],
     ["Good to see you", "Welcome Back!", "Do you ever take a day off?"],
     ["You are amazing", "Thank you for coming to work!", "You are a god among men!"]
    ]
};

const firstIndex = messages.message[Math.floor(Math.random()* messages.message.length)];
const secondIndex = messages.messages[firstIndex][Math.floor(Math.random()*messages.messages[firstIndex])];
