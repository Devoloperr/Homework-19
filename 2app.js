let year = prompt("Enter the year");
if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 !== 0) {
        console.log("Uzun il deyil");
    } else {
        console.log("Uzun ildir");
    }
} else {
    console.log("Uzun il deyil");
}