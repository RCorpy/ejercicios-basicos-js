var functions = require('./potter')

test('trying the links', () => {

    x = new functions.Potter(["A"])

    expect(x.bookArray).toStrictEqual(["A"])
})

test('test the bookDict function', () => {

    x = new functions.Potter(["A", "A", "B", "D"])

    expect(x.bookDict).toStrictEqual({"A": 2, "B":1, "D":1})
})

test('test the priceCalc function', () => {

    x = new functions.Potter(["A", "A", "B", "D"])

    expect(x.bookPrice).toStrictEqual(8)
})

test('test totalPrice with 1 book', () => {

    x = new functions.Potter(["A"])

    expect(x.bookPrice).toStrictEqual(8)
})

test('test recursion', () => {

    x = new functions.Potter(["A", "A", "B", "D"])

    expect(x.totalPrice).toStrictEqual(29.6)
})