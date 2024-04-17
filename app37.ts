function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the following message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("Medium");

// Make a shirt of any size with a different message
make_shirt("Small", "wao, small shirt");