var functions = require('./minesweeper')


//because its random the generation of mines its hard to test, I did it by hand, its easy to check in the output
test("trying a 3 by 3", () => {
    let x = new functions.MineSweeper(3,3,3)

    //expect(x.map).toBe(3)
    expect(x.mines).toBe(3);

});

test("trying a 5x5", () => {
    let x = new functions.MineSweeper(5,5,5)

    expect(x.mines).toBe(5);

});

test("trying a 50x50", () => {
    let x = new functions.MineSweeper(50,50,150)

    expect(x.mines).toBe(150);

});