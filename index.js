// code your solution here
function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
}


function mondayWork(activity = "go to the office") {
    console.log(`This Monday, I will ${activity}`);

}

function wrapAdjective(flair = "*") {
    return function (spec = "special") {
        return `You are ${flair}${spec}${flair}!`;
    }
}

