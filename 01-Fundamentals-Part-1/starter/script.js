/*let js ="amazing";
//if (js === "amazing") alert ("yes");

console.log(2+2);
console.log("Jonas")*/

// ******CODING CHALLENGE 1-2*********
/*const markMass1 = 78
const markHeight1 = 1.69
const markBMI1 = markMass1 / (markHeight1**2)
const johnMass1 = 92
const johnHeight1 = 1.95
const johnBMI1 = johnMass1 / (johnHeight1**2)
let markHigherBMI = (markBMI1 > johnBMI1)
console.log(markBMI1)
console.log(johnBMI1)
console.log(markHigherBMI)
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`)
}
else {
    console.log(`Johns BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`)
}*/

//5 falsy values: 0, '', undefined, null, NaN
//Anything else is a truthy value
// === checks if type is the same, == only checks if value is the same

//*** CODING CHALLENGE 3********
const DolphinsScore1 = (97+112+101)/3
const KoalasScore1 = (109+95+106)/3

if (DolphinsScore1 === KoalasScore1 && DolphinsScore1 >= 100) 
    console.log(`It's a draw! both teams scored ${DolphinsScore1} points.`);
else if (DolphinsScore1 > KoalasScore1 && DolphinsScore1 >= 100)
    console.log(`Dolphins win with a score of ${DolphinsScore1}.`);
else if (KoalasScore1 >= 100)
    console.log(`Koalas win with a score of ${KoalasScore1} points.`);
else
    console.log(`No winners. Dolphins: ${DolphinsScore1}. Koalas: ${KoalasScore1}.`)