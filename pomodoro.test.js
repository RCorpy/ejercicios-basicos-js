var functions = require('./pomodoro')

test('trying the links', () => {

    let x = new functions.Pomodoro()

    expect(x.timer).toBe(25)
})

test('testing we can change the amount of minutes', () => {

    let x = new functions.Pomodoro(30)

    expect(x.timer).toBe(30)
})