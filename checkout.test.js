var functions = require('./checkout')

pricingRules = ["4A for 160", "2C for 15"]

test('Testing the links', () => {
    x = new functions.Checkout(pricingRules)
    x.scan("A")

    expect(x.itemArray).toStrictEqual(["A"])
})

test('Testing the itemArray', () => {
    x = new functions.Checkout(pricingRules)
    x.scan("A")
    x.scan("A")
    x.scan("B")
    x.scan("A")
    x.scan("B")
    x.total()

    expect(x.totalCost).toStrictEqual(210)
})

test('Testing the rules', () => {
    x = new functions.Checkout(pricingRules)
    x.scan("A")
    x.scan("A")
    x.scan("A")
    x.scan("A")

    x.total()

    expect(x.totalCost).toStrictEqual(160)
})

test('Testing the rules on only 1 item, with excess', () => {
    x = new functions.Checkout(pricingRules)
    x.scan("A")
    x.scan("A")
    x.scan("B")
    x.scan("A")
    x.scan("B")
    x.scan("A")
    x.scan("A")

    x.total()

    expect(x.totalCost).toStrictEqual(270)
})

test('Testing multiple rules', () => {
    x = new functions.Checkout(pricingRules)
    x.scan("A")
    x.scan("A")
    x.scan("B")
    x.scan("A")
    x.scan("B")
    x.scan("A")
    x.scan("A")
    x.scan("C")
    x.scan("C")
    x.scan("C")
    x.scan("C")
    x.scan("C")


    x.total()

    expect(x.totalCost).toStrictEqual(310)
})