var functions = require('./marsRover');

test("trying the tests", () => {

    x = new functions.MarsRover(1,"XYZ")
    
    expect(x.landingPos).toStrictEqual(1)
});

test("trying the move foward", () => {

    x = new functions.MarsRover([1,1], "MMM")
    
    expect(x.finalPos).toStrictEqual([1,4])
});

test("trying the turns, right", () => {

    x = new functions.MarsRover([1,1], "RM")
    
    expect(x.finalPos).toStrictEqual([2,1])
});

test("trying the turns, left", () => {

    x = new functions.MarsRover([1,1], "LM")
    
    expect(x.finalPos).toStrictEqual([0,1])
});

test("testing it knows where its facing", () => {

    x = new functions.MarsRover([1,1], "LLR")
    
    expect(x.cardinal).toStrictEqual("Oeste")
});