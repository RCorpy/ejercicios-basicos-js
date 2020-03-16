var functions = require('./cashRegister')

// name, value, amount
let cid = [["note of 50", 50, 10], ["note of 20", 20, 2], ["note of 10", 10, 2], ["note of 5", 5, 3], ["coin of 2", 2, 5], ["coin of 1",1, 5], ["coin of 50cents", 0.5, 5],
 ["coin of 20cents", 0.2, 5], ["coin of 10cents", 0.1, 10], ["coin of 5cents", 0.05, 10], ["coin of 2cents", 0.02,10], ["coin of 1cent", 0.01,10]]

test("checking the link between files", () => {

    expect(new functions.CashRegister(1,1,1).price).toBe(1)
    expect(new functions.CashRegister(1,1,1).cash).toBe(1)
    expect(new functions.CashRegister(1,1,["coin of 1",1, 10]).cid).toStrictEqual(["coin of 1",1, 10])
})
//price, cash, cash-in-drawer
test("testing the amount to return", () => {

    expect(new functions.CashRegister(1,2,["coin of 1",1, 10]).toReturn).toBe(100)
})

test("testing checkCashRegister", () => {

    expect(new functions.CashRegister(1,1,[["coin of 1",1, 10]]).checkCashRegister()).toStrictEqual(["open", ""])
})

test("if we have no change, status is INSUFFICIENT_FUNDS", () => {

    expect(new functions.CashRegister(1,2,[["coin of 1",1, 0]]).checkCashRegister()).toStrictEqual(["INSUFFICIENT_FUNDS", ""])
})

test("if we have exact change, status is closed", () => {

    expect(new functions.CashRegister(1,1,[["coin of 1",1, 0]]).checkCashRegister()).toStrictEqual(["closed", ""])
})

test("test we have to give back 1 coin of 1", () => {

    expect(new functions.CashRegister(1,2,[["coin of 1",1, 2]]).checkCashRegister()).toStrictEqual(["open", "1 coin of 1"])
})

test("test we have to give back 2 coin of 1", () => {

    expect(new functions.CashRegister(1,3,[["coin of 1",1, 10]]).checkCashRegister()).toStrictEqual(["open", "2 coin of 1"])
})

test("test we have to give back 2 notes of 20 and 3 coins of 1", () => {

    expect(new functions.CashRegister(1,44,[["note of 20", 20, 2],["coin of 1",1, 10]]).checkCashRegister()).toStrictEqual(["open", "2 note of 20, 3 coin of 1"])
})

test("test full drawer, returning ", () => {

    expect(new functions.CashRegister(1,199.66,cid).checkCashRegister()).toStrictEqual(["open", "3 note of 50, 2 note of 20, 0 note of 10, 1 note of 5, 1 coin of 2, 1 coin of 1, 1 coin of 50cents, 0 coin of 20cents, 1 coin of 10cents, 1 coin of 5cents, 0 coin of 2cents, 1 coin of 1cent"])
})