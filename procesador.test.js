var functions = require('./procesador')

test('trying the links', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "Hello"

    let x = new functions.Procesador(text, word)

    expect(x.word).toBe("Hello")
})

test('testing is present', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "Hello"

    let x = new functions.Procesador(text, word)

    expect(x.isWordPresent()).toBe(1)
})

test('testing is present with non-existing word', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "HelloCSDFAS"

    let x = new functions.Procesador(text, word)

    expect(x.isWordPresent()).toBe(false)
})

test('testing how many repetitions of the word are there', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "is"

    let x = new functions.Procesador(text, word)

    expect(x.isWordPresent()).toBe(2)
})

test('testing most used word', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "is"

    let x = new functions.Procesador(text, word)

    expect(x.mostUsedWord()).toBe("is")
})

test('testing getting the words by frequency of use', () => {

    let text = "Hello my name is Ramon and today is a nice day for coding"
    let word = "is"

    let x = new functions.Procesador(text, word)

    expect(x.order).toStrictEqual(["is", "Hello", "my", "name", "Ramon", "and", "today", "a", "nice", "day", "for", "coding"])
})