const messages = {
    jokes: ["Whats is red and bad for your teeth? A Brick", "What side of the turkey has more feathers? The Inside."],
    tease: ["Why are you here?", "Workaholic much?", "Do you ever take a day off?"],
    praise: ["You are amazing", "Thank you for coming to work!", "You are a god among men!"]
};

function getRandomMessage() {
    // Get an array of category keys (jokes, tease, praise)
    const categories = Object.keys(messages);
    
    // Pick a random category from the list
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Get the array associated with the randomly selected category
    const selectedMessages = messages[randomCategory];
    
    // Pick a random message from the selected category
    const randomMessage = selectedMessages[Math.floor(Math.random() * selectedMessages.length)];
    
    return randomMessage;
}

// Example usage:
const randomMessage = getRandomMessage();
console.log(randomMessage); // This will output a random message from any category
