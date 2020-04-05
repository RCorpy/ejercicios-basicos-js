var functions = require('./bowling')

test("trying the links", () => {
    x = new functions.Bowling(["11"])

    expect(x.scoreArray).toStrictEqual(["11"])
})

test("trying normal additions", () => {
    x = new functions.Bowling(["15", "62"])

    expect(x.score).toBe(14)
})

test("testing combinations", () => {
    x = new functions.Bowling(["1/", "62"])

    expect(x.score).toBe(24)
})

test("testing combinations2 ", () => {
    x = new functions.Bowling(["X", "62"])

    expect(x.score).toBe(26)
})

test("testing combinations2 ", () => {
    x = new functions.Bowling(["X", "X", "62"])

    expect(x.score).toBe(52)
})

test("testing full game ", () => {
    x = new functions.Bowling(["X", "X", "62", "0/", "71", "X","09", "X", "1/", "22"])

    expect(x.score).toBe(141)
})