// Original guest list
var guestslist = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist.forEach(function (list) {
    console.log(list);
});
// remove guest
var removeguest = 'Shumaila';
//add guest
var addguest = 'Hajra';
// Find the index of removed guest 
var removeguestindex = guestslist.indexOf(removeguest);
console.log("removeguestindex", guestslist.indexOf(removeguest));
console.log("new guest will be", addguest);
// If the guest is found, remove them and add the new guest
if (removeguestindex !== -1) {
    guestslist.splice(removeguestindex, 1, addguest);
}
// Print the updated guest list
console.log("Updated guest list:");
guestslist.forEach(function (guest) {
    console.log(guest);
});
