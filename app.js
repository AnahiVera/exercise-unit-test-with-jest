// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 146.26;
    // return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.00556;
    // return the Pound value
    return valueInPound;
}



const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

