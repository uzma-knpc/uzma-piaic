// Original guest list
let guestslist: string[] = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist.forEach(list =>{
    console.log(list)
})
// remove guest
const removeguest: string = 'Shumaila';
//add guest
const addguest: string = 'Hajra';
// Find the index of removed guest 
const removeguestindex: number = guestslist.indexOf(removeguest);
console.log("removeguestindex",guestslist.indexOf(removeguest))
console.log("new guest will be*",addguest)
// If the guest is found, remove them and add the new guest
if (removeguestindex !== -1) {
    guestslist.splice(removeguestindex, 1, addguest);
}
// Print the updated guest list
console.log("Updated guest list:");
guestslist.forEach(guest => {
    console.log(guest);
});