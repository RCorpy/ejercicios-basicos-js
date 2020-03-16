var functions = require('./palindromos');



test('testing right construction of words', () => {
  expect(new functions.Palindromos(" Hel!!%$lo   ").word).toBe("hello");
});

test('testing isPalindrome', () => {
  expect(new functions.Palindromos(" Hel!!%$lo   ").isPalindrome()).toBe(false);
});

test('testing isPalindrome for true in a even number of letters', () => {
  expect(new functions.Palindromos(" HeEh   ").isPalindrome()).toBe(true);
});

test('testing isPalindrome for true in a odd number of letters', () => {
  expect(new functions.Palindromos(" $··!!eYE   ").isPalindrome()).toBe(true);
});