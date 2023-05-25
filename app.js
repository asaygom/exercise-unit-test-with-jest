let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollarAmount) =>{
    return (dollarAmount/oneEuroIs.USD) * oneEuroIs.JPY
}

const fromEuroToDollar = (euroAmount) =>{
    return euroAmount*oneEuroIs.USD
}

const fromYenToPound = (yenAmount) =>{
    return (yenAmount/oneEuroIs.JPY) * oneEuroIs.GBP
}

module.exports = {
    fromDollarToYen, fromEuroToDollar, fromYenToPound
}