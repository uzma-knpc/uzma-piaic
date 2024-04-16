// Q31No Users

let Uname: string[] = [];

// Check if the list of users is not empty
if (Uname.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let Unames of Uname) {
        if (Unames === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${Uname}, thank you for logging in again.`);
        }
    }
}