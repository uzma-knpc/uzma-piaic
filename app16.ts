// q16: add new users for big dinner table in Original guest list
const guestslist1: string[] = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist1.forEach(list =>{
    console.log(list)
})
//add guest first
guestslist1.unshift('seema')
// add guest last
guestslist1.push('Raheela')
// add guest middle
const middleindex:number=Math.floor(guestslist1.length/2);
    guestslist1.splice(middleindex, 0, 'Sadaf');
console.log("**Seema, Sadaf and Raheela will be the addes guests respectively**");
    // Print the updated guest list
console.log("Updated guest list:");
guestslist1.forEach(guest => {
    console.log(guest);
});