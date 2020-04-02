var functions = require('./FizzBuzz');

test("trying the string", () => {

    x = new functions.FizzBuzz(10)
    
    expect(x.value).toBe("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\n")})
    
    