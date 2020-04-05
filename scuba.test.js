var functions = require('./scuba')

test('trying the links', () => {
    let x = new functions.Scuba(["B"])

    expect(x.instructions).toStrictEqual(["B"])
})

test('trying the score with 1 action', () => {
    let x = new functions.Scuba(["B"])

    expect(x.score).toBe(1)
})

test('trying the score with 2 action', () => {
    let x = new functions.Scuba(["B", "B"])

    expect(x.score).toBe(3)
})

test('testing it doesnt go up above sea level', () => {
    let x = new functions.Scuba(["S"])

    expect(x.score).toBe(0)
})

test('testing all different actions', () => {
    let x = new functions.Scuba(["B","B","M","S"])

    expect(x.score).toBe(6)
})

test('testing death', () => {
    let x = new functions.Scuba(["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","M", "S"])

    expect(x.score).toBe(0)
})

test('testing limits', () => {
    let x = new functions.Scuba(["B","B","B","B","B","B","B","B","B","B","B","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M",])

    expect(x.score).toBe(462)
})