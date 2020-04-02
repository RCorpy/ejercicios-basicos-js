var functions = require('./poker');

test("trying the tests with a hand", () => {

    x = new functions.Poker(["2S", "4H", "5D", "JD", "KC"])
    
    expect(x.handArray).toStrictEqual(["2S", "4H", "5D", "JD", "KC"])
});

test("testing the flush", () => {

    x = new functions.Poker(["2H", "4H", "5H", "JH", "KH"])
    
    expect(x.isFlush).toBe(true)
});

test("testing no flush", () => {

    x = new functions.Poker(["2H", "4D", "5H", "JH", "KH"])
    
    expect(x.isFlush).toBe(false)
});

test("testing the decoder", () => {

    x = new functions.Poker(["2H", "4D", "5H", "3H", "6H"])
    
    expect(x.decodedHand).toStrictEqual([2,3,4,5,6])
    expect(x.handValue).toStrictEqual("Straight, highcard is 6")
});

test("testing the decoder with face cards", () => {

    x = new functions.Poker(["2H", "KD", "5H", "3H", "JH"])
    
    expect(x.decodedHand).toStrictEqual([2,3,5,11,13])
});

test("testing the straight", () => {

    x = new functions.Poker(["2H", "4D", "5H", "3H", "AH"])
    
    expect(x.isStraight).toBe(true)
    expect(x.handValue).toBe("Straight, highcard is 5")
});

test("testing the NO straight", () => {

    x = new functions.Poker(["2H", "4D", "7H", "3H", "AH"])
    
    expect(x.isStraight).toBe(false)
});

test("testing duplicates, full house", () => {

    x = new functions.Poker(["4H", "4D", "8H", "8H", "8H"])
    
    expect(x.handValue).toBe("Full House, 8s over 4s")
});

test("testing duplicates, two pair", () => {

    x = new functions.Poker(["4H", "4D", "7H", "AH", "AH"])
    
    expect(x.handValue).toBe("Two Pair, As over 4s")
});

test("testing duplicates, highcard", () => {

    x = new functions.Poker(["4H", "8D", "7H", "KH", "TH"])
    
    expect(x.handValue).toBe("Highcard of K")
});

test("testing duplicates, pair", () => {

    x = new functions.Poker(["4H", "8D", "7H", "TH", "TH"])
    
    expect(x.handValue).toBe("Pair, Ts")
});

test("testing duplicates, three of a kind", () => {

    x = new functions.Poker(["4H", "2D", "2H", "2H", "TH"])
    
    expect(x.handValue).toBe("Three of a kind, 2s")
});

test("testing duplicates, four of a kind", () => {

    x = new functions.Poker(["QH", "8D", "QH", "QH", "QH"])
    
    expect(x.handValue).toBe("Four of a kind, Qs")
});