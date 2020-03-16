var functions = require('./decoder');

test("trying the links between files", () => {

    expect(new functions.Decoder("HelloWorld").originalString).toBe("HelloWorld");

});

test("trying transform function", () => {

    expect(new functions.Decoder("a").transform()).toBe("n");

});

test("trying longer strings", () => {

    expect(new functions.Decoder("abcde").transform()).toBe("nopqr");

});

test("trying the last letters to go around the alphabet", () => {

    expect(new functions.Decoder("xyz").transform()).toBe("klm");

});