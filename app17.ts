// q17: Shrinking Guest List: 
const guestslist2: string[] = ['Uzma', 'Aisha', 'Hufsa', 'Shumaila'];
console.log("**Guest list**:");
guestslist2.forEach(list =>{
    console.log(list)
})
console.log('%%%%you can invite only two people for dinner.%%%%')
let removeindex:string='Uzma'
let removeindex2:string='Aisha'
let removeindex3:string='Hufsa'
let removeind4:string='Shumaila'
// add guest middle
const index1:number=guestslist2.indexOf(removeindex);
    guestslist2.splice(index1, 1, '');
    // Print the updated guest list
    // Print the updated guest list
    // Print the updated guest list
console.log(`\n Sorry ${removeindex} you are not invited `) 
    // Print the updated guest list
console.log("Updated guest list:");
guestslist2.forEach(guest => {
    console.log(guest);
});
const index2:number=guestslist2.indexOf(removeindex2);
    guestslist2.splice(index2, 1, '');
    console.log(`\n Sorry ${removeindex2} you are not invited `) 
    // Print the updated guest list
console.log("Updated guest list:");
guestslist2.forEach(guest => {
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
const index3:number=guestslist2.indexOf(removeindex3)
guestslist2.splice(index3,2,"")
console.log(`\n Sorry ${removeindex3} you are not invited `) 

// const index5:number=guestslist2.indexOf(removeind4)
// guestslist2.splice=(index5,1,"")
console.log(`\n sorry ${removeind4} you are not invited`)
// Print the updated guest list
console.log(" \n Updated guest list:");
guestslist2.forEach(guest => {
    console.log(guest);
});