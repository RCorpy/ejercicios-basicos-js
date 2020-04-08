var functions = require('./Oca')

test("trying the links", () => {

    let x = new functions.OcaGame()
    x.addPlayer("Ramon")

    expect(x.players[0].name).toBe("Ramon")
})


test("adding 2 players", () => {

    let x = new functions.OcaGame()
    x.addPlayer("Ramon")
    x.addPlayer("Charly")

    expect(x.players[0].name).toBe("Ramon")
    expect(x.players[1].name).toBe("Charly")
})

test("There can be no 2 players with the same name", () => {

    let x = new functions.OcaGame()
    x.addPlayer("Ramon")
    x.addPlayer("Ramon")
    x.addPlayer("Charly")

    expect(x.players[0].name).toBe("Ramon")
    expect(x.players[1].name).toBe("Charly")
})

test("The player can move foward", () => {

    let x = new functions.OcaGame()
    x.addPlayer("Ramon")
    x.addPlayer("Ramon")
    x.addPlayer("Charly")
    x.players[0].rolls(2,3)

    expect(x.players[0].position).toBe(6)
    expect(x.players[1].name).toBe("Charly")
})


test("The player bounces!", () => {

    let x = new functions.OcaGame()
    x.addPlayer("Ramon")
    x.addPlayer("Ramon")
    x.addPlayer("Charly")
    x.players[0].position = 60
    x.players[0].rolls(5,4)

    expect(x.players[0].position).toBe(57)
    expect(x.players[1].name).toBe("Charly")
})