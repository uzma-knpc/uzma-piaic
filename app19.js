// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Array of guest names
var guestlist = ['Hufsa', 'Aisha', 'Ismail', 'Yahya'];
// Print invitation messages for each guest
guestlist.forEach(function (guest) {
    console.log("Dear Guest ".concat(guest, " \nwe are inviting you at dinner \nThankyou\n"));
    // guestlist.forEach(function (guest) {
    // console.log("Respected guest".concat(guest, ",\nWe would like to invite you for dinner tomorrow.\nThank you.\n"));
});
// Print the number of people invited to dinner
console.log("Total number of people invited to dinner: ".concat(guestlist.length));
