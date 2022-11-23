// code your solution here

// part one- function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));


// part two-function mondayWork
const mondayWork = function (doWhat= "go to the office") {
    return `This Monday, I will ${doWhat}.`;
}
console.log(mondayWork("work from home"));


// part three-again function saturdayFun??
function wrapAdjective(flair= "*") {
    const innerFunction = function (character = "special",) {
        return `You are ${flair}${character}${flair}!`;
    };
    return innerFunction;
}

console.log(wrapAdjective("||")("a hard worker"));


