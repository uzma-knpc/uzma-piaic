"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Uname = [];
// Check if the list of users is not empty
if (Uname.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, Uname_1 = Uname; _i < Uname_1.length; _i++) {
        var Unames = Uname_1[_i];
        if (Unames === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(Uname, ", thank you for logging in again."));
        }
    }
}
