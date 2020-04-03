var functions = require('./thegreeting')

test('testing the single input', ()  => {
    let x = new functions.Greeting(["Mary"])

    expect(x.output).toBe("Hello, Mary.")
})

test('testing the null input', ()  => {
    let x = new functions.Greeting()

    expect(x.output).toBe("Hello, my friend.")
})

test('testing the multiple input', ()  => {
    let x = new functions.Greeting(["Mary", "Josh"])

    expect(x.output).toBe("Hello, Mary and Josh.")
})

test('testing the multiple input with mayus', ()  => {
    let x = new functions.Greeting(["Mary", "Josh", "DAVID"])

    expect(x.output).toBe("Hello, Mary and Josh. HELLO, DAVID")
})