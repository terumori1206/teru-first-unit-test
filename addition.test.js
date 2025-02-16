//The operation should return the sum of two numbers
const { addition } = require('./addition')

test.skip('3 + 4 = 7', () => {
    expect(addition(3, 4)).toBe(7)
})

test('-10 + 3 = -7', () => {
    expect(addition(-10, 3)).toBe(-7)
})