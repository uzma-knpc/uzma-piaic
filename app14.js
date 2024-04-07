// Guest List: 
var guestarray = ['Aisha', 'Yahya', 'Ismail'];
var invitmessage = "Please vist us on tommorrow dinner,its honour";
guestarray.forEach(function (invite) {
    // console.log(invite,invitmessage)
    // console.log('please ${invite} to us.')
    console.log("Pleas visit to us ".concat(invite, " for dinner."));
});
