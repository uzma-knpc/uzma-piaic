// q1: add new users for big dinner table in Original guest list
var guestslist1 = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist1.forEach(function (list) {
    console.log(list);
});
//add guest first
guestslist1.unshift('seema');
// add guest last
guestslist1.push('Raheela');
// add guest middle
var middleindex = Math.floor(guestslist1.length / 2);
guestslist1.splice(middleindex, 0, 'Sadaf');
console.log("Seema, Sadaf and Raheela will be the addes guests respectively");
// Print the updated guest list
console.log("Updated guest list:");
guestslist1.forEach(function (guest) {
    console.log(guest);
});
