let user = prompt("Enter 3 two-digit numbers with a space");
let number = user.split(" ");
if ((number[0] > 9 && number[0] < 100) && (number[1] > 9 && number[1] < 100) && (number[2] > 9 && number[2] < 100)) {
    if (number[0] < number[1] && number[0] > number[2] || number[0] > number[1] && number[0] < number[2]) {
        console.log(number[0]);
    } else if (number[1] < number[0] && number[1] > number[2] || number[1] > number[0] && number[1] < number[2]) {
        console.log(number[1]);
    } else if (number[2] < number[0] && number[2] > number[1] || number[2] > number[0] && number[2] < number[1]) {
        console.log(number[2]);
    } else if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
        console.log("two or three numbers entered are the same");
    }
} else {
    console.log("Enter a two-digit number");
}
