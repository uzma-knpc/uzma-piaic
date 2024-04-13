// Q18:Think of at least five places in the world 
const Fplaces:string[] = ["Texas", "Canada", "Toronto", "Dubai", "Karachi"];
console.log(Fplaces)
const sortplace:string[]=Fplaces.sort()
console.log(sortplace)
const reversplace:string[]=Fplaces.reverse()
console.log(reversplace)
console.log("\n ***Original order:");
console.log(Fplaces);
// Print your array in alphabetical order without modifying the actual list.
console.log("\n***Alphabetical order:");
console.log(sortplace);
console.log("\n ***Original order :");
console.log(Fplaces);
// console.log(Fplaces.slice(0).sort())
console.log("\n***Reverse alphabetical order:");
console.log([Fplaces].sort().reverse());
// console.log(Fplaces.reverse());
// console.log(reversplace)
console.log("\n****Original order ");
console.log(Fplaces);
// console.log("\nReversed order:");
console.log(Fplaces.reverse());
// console.log(reversplace)
console.log("\n **Reversed back to original order:");
console.log(Fplaces);
console.log("\n ***Sorted in alphabetical order:");
console.log.apply(console, Fplaces.sort());
// console.log(sortplace)
console.log("\n****Sorted in reverse alphabetical order:");
console.log(Fplaces.sort().reverse())
// console.log(sortplace.reverse())