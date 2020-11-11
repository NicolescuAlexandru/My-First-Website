
function callName(lastName, firstName) {
    console.log("Welcome back " + lastName + " " + firstName + "!")
}

callName("Alex", "Nicks");

const gameBoard = [
    ['0', 'x', null],
    ['x', 'Hello', null],
    ['x', null, '0']
];

console.log(gameBoard);

const boysName = ['Alex',];
const girlsName = ['Teodora', 'Maria', 'Andreea', 'Mara', 'Alexandra', 'Timea'];

if (boysName.length === girlsName.length) {
    console.log("There are as many name examples for both boys and girls");
} else {
    while (boysName.length !== girlsName.length) {
        switch (boysName.length > girlsName.length || boysName < girlsName) {
            case (boysName.length > girlsName.length):
                girlsName.push('dafaultGirlName')
                break;
            case (boysName.length < girlsName.length):
                boysName.push('defaultBoyName')
                break;
            default:
                console.log("Something is really fishy!")
        }
    }
    console.log("There are as many name examples for both boys and girls")
}

console.log(boysName);
console.log(girlsName);
