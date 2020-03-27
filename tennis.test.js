var functions = require('./tennis');

test("testing first service of first game scoreboard", () => {

    const Match = new functions.Tenis()

    expect(Match.scoreboard).toStrictEqual([[0,0,0],[0,0,0]])
});

test("testing 4th service at 7th game of 2nd set scoreboard", () => {

    const Match = new functions.Tenis()

    Match.player[0].setScore = 1
    Match.player[0].gameScore = 2
    Match.player[0].points = 15

    Match.player[1].setScore = 1
    Match.player[1].gameScore = 5
    Match.player[1].points = 30

    expect(Match.player[0].gameScore).toBe(2)
    expect(Match.player[0].setScore).toBe(1)
    expect(Match.player[0].points).toBe(15)
    expect(Match.player[1].setScore).toBe(1)
    expect(Match.player[1].gameScore).toBe(5)
    expect(Match.player[1].points).toBe(30)
});

test("trying the scoreboard", () => {

    const Match = new functions.Tenis()

    Match.player[0].setScore = 0
    Match.player[0].gameScore = 0
    Match.player[0].points = 0

    Match.player[1].setScore = 0
    Match.player[1].gameScore = 0
    Match.player[1].points = 0

    Match.updateScoreboard()

    expect(Match.scoreboard).toStrictEqual([[0,0,0],[0,0,0]])

});

test("trying the scoreboard", () => {

    const Match = new functions.Tenis()

    Match.player[0].setScore = 1
    Match.player[0].gameScore = 2
    Match.player[0].points = 15

    Match.player[1].setScore = 0
    Match.player[1].gameScore = 3
    Match.player[1].points = 30

    Match.updateScoreboard()

    expect(Match.scoreboard).toStrictEqual([[1,2,15],[0,3,30]])

});

test("testing first service of first game scoreboard", () => {

    const Match = new functions.Tenis()
    Match.point("Marlo",1)

    expect(Match.scoreboard).toStrictEqual([[0,0,15],[0,0,0]])
});

test("testing first service of first game scoreboard", () => {

    const Match = new functions.Tenis()
    Match.point("Marlo", 2)
    Match.point("Ramon",1)
    expect(Match.scoreboard).toStrictEqual([[0,0,30],[0,0,15]])
    
});