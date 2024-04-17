// -Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the following message: \n"${message}".`);
}

// Call the function
make_shirt("MIDIUM", "AN APPLE A DAY KEEPS DR AWAY");