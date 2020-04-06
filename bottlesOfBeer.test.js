var functions = require('./bottlesOfBeer')

test('trying links', () => {

    x = new functions.Song(5)

    expect(x.verses).toBe(5)
})

test('testing 1 verse', () => {

    x = new functions.Song(100)
    x.createSong()

    expect(x.verseArray[99]).toBe("99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, 98 bottles of beer on the wall.")
})

test('testing second to last bottle verse', () => {

    x = new functions.Song(100)
    x.createSong()

    expect(x.verseArray[1]).toBe("1 bottle of beer on the wall, 1 bottle of beer.\nTake it down, pass it around, no more bottles of beer on the wall.")
})

test('testing last bottle verse', () => {

    x = new functions.Song(100)
    x.createSong()

    expect(x.verseArray[0]).toBe("no more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
})