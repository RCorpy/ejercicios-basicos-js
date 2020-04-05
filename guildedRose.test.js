var functions = require('./guildedRose')

test('Trying the links', () =>{
    x = new functions.Item("potion", 3, 4)

    expect(x.name).toBe("potion")
    expect(x.sellIn).toBe(3)
    expect(x.quality).toBe(4)
})

test('Trying to pass 1 day', () =>{
    x = new functions.Item("potion", 3, 4)
    x.dayPass()
    
    expect(x.sellIn).toBe(2)
    expect(x.quality).toBe(3)
})

test('Trying to pass 5 day, quality doest go below 0', () =>{
    x = new functions.Item("potion", 3, 4)
    x.dayPass()
    x.dayPass()
    x.dayPass()
    x.dayPass()
    x.dayPass()
    
    expect(x.sellIn).toBe(-2)
    expect(x.quality).toBe(0)
})

test('Testing a second class', () =>{
    x = new functions.Brie("Mercadona's", 3, 4)

    expect(x.name).toBe("Mercadona's")
    expect(x.sellIn).toBe(3)
    expect(x.quality).toBe(4)
})

test('Testing a second class methods', () =>{
    x = new functions.Brie("Mercadona's", 3, 4)

    x.dayPass()

    expect(x.sellIn).toBe(3)
    expect(x.quality).toBe(5)
})

test('Testing Brie, cant go over 50', () =>{
    x = new functions.Brie("Mercadona's", 3, 49)

    x.dayPass()
    x.dayPass()

    expect(x.sellIn).toBe(3)
    expect(x.quality).toBe(50)
})

test('Testing Sulfuras', () =>{
    x = new functions.Sulfuras("Sulfuras", 1, 49)

    x.dayPass()
    x.dayPass()

    expect(x.sellIn).toBe(1)
    expect(x.quality).toBe(49)
})

test('Testing BackStagePass', () =>{
    x = new functions.BackStagePass("Sabina", 10, 3)

    x.dayPass()
    x.dayPass()

    expect(x.sellIn).toBe(8)
    expect(x.quality).toBe(7)
})

test('Testing BackStagePass over date', () =>{
    x = new functions.BackStagePass("Sabina", 3, 7)

    x.dayPass()
    x.dayPass()
    x.dayPass()
    x.dayPass()

    expect(x.sellIn).toBe(-1)
    expect(x.quality).toBe(0)
})

test('Testing conjured items', () =>{
    x = new functions.Conjured("Sabina", 3, 20)

    x.dayPass()
    x.dayPass()
    x.dayPass()
    x.dayPass()

    expect(x.sellIn).toBe(-1)
    expect(x.quality).toBe(10)
})