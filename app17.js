// q17: Shrinking Guest List: 
var guestslist2 = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist2.forEach(function (list) {
    console.log(list);
});
console.log('%%%%you can invite only two people for dinner.%%%%');
var removeindex = 'Uzma';
var removeindex2 = 'Aisha';
var removeindex3 = 'Hufsa';
var removeind4 = 'Shumaila';
// add guest middle
var index1 = guestslist2.indexOf(removeindex);
guestslist2.splice(index1, 1, '');
// Print the updated guest list
// Print the updated guest list
// Print the updated guest list
console.log("\n Sorry ".concat(removeindex, " you are not invited "));
// Print the updated guest list
console.log("Updated guest list:");
guestslist2.forEach(function (guest) {
    console.log(guest);
});
var index2 = guestslist2.indexOf(removeindex2);
guestslist2.splice(index2, 1, '');
console.log("\n Sorry ".concat(removeindex2, " you are not invited "));
// Print the updated guest list
console.log("Updated guest list:");
guestslist2.forEach(function (guest) {
    console.log(guest);
});
// guestslist2.splice(guestslist2.indexOf(2), 1, '');
// guestslist2.splice(guestslist2.indexOf(3), 1, '');
// for (var i=0; i<guestslist2.length-1; i++){
// console.log(guestslist2.length)
// guestslist2.splice(i,1,"")
// remo:string=guestslist2.length-1
// console.log(guestslist2.length-i)
// console.log(`Sorry ${guestslist2[i]} you are not invited `) 
// }
var index3 = guestslist2.indexOf(removeindex3);
guestslist2.splice(index3, 2, "");
console.log("\n Sorry ".concat(removeindex3, " you are not invited "));
// const index5:number=guestslist2.indexOf(removeind4)
// guestslist2.splice=(index5,1,"")
console.log("\n sorry ".concat(removeind4, " you are not invited"));
// Print the updated guest list
console.log(" \n Updated guest list:");
guestslist2.forEach(function (guest) {
    console.log(guest);
});
