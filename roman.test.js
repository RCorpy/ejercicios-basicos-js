var functions = require('./roman');

test("trying the tests with a 1", () => {

    x = new functions.Romans(1)
    x.convert()
    expect(x.result).toBe("I")
});

test("testing the string recieved", () => {

    expect(new functions.Romans(1).numberString).toBe("1")
});

test("testing number 3", () => {

    x = new functions.Romans(3)
    x.convert()
    expect(x.result).toBe("III")
});

test("testing number 4", () => {

    x = new functions.Romans(4)
    x.convert()
    expect(x.result).toBe("IV")
});

test("testing number 7", () => {

    x = new functions.Romans(7)
    x.convert()
    expect(x.result).toBe("VII")
});

test("testing number 9", () => {

    x = new functions.Romans(9)
    x.convert()
    expect(x.result).toBe("IX")
});

test("testing number 11", () => {

    x = new functions.Romans(11)
    x.convert()
    expect(x.result).toBe("XI")
});

test("testing number 14", () => {

    x = new functions.Romans(14)
    x.convert()
    expect(x.result).toBe("XIV")
});

test("testing number 16", () => {

    x = new functions.Romans(16)
    x.convert()
    expect(x.result).toBe("XVI")
});

test("testing number 328", () => {

    x = new functions.Romans(328)
    x.convert()
    expect(x.result).toBe("CCCXXVIII")
});