const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app')

test('fromDollarToYen should return a number', ()=>{
    const result = fromDollarToYen(1)
    expect(typeof result).toBe('number')
})

test('fromEuroToDollar should return a number', ()=>{
    const result = fromEuroToDollar(1)
    expect(typeof result).toBe('number')
})

test('fromYenToPound should return a number', ()=>{
    const result = fromYenToPound(1)
    expect(typeof result).toBe('number')
})

test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("9 dollars should be 959.25 yen", function(){
    const yens = fromDollarToYen(9)

    const expected = (9 / 1.2) * 127.9; 
    
     expect(fromDollarToYen(9)).toBe(959.25);
})

test("15987.5 yens should be 100 pounds", function(){
    const pounds = fromYenToPound(15987.5)

    const expected = (15987.5 / 127.9) * 0.8; 
    
     expect(fromYenToPound(15987.5)).toBe(100);
})