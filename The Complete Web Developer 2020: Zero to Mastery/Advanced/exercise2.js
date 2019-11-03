//#1 change this function into a ternary and assign it to variable called experiencePoints
var experiencePoints => () {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function selectFruits(fruits) {
    var result = "You choose ";
    switch (fruits) {
        case "oranges":
            console.log(result + "oranges");
            break;
        case "apples":
            console.log(result + "apples");
            break;
        case "lemons":
            console.log(result + "lemons");
            break;
        case "watermelons":
            console.log(result + "watermelons");
            break;
        case "coconuts":
            console.log(result + "coconuts");
            break;
        case "bananas":
            console.log(result + "bananas");
            break;
        case "tangerines":
            console.log(result + "tangerines");
            break;
        case "avocados":
            console.log(result + "avocados");
            break;

    }
}