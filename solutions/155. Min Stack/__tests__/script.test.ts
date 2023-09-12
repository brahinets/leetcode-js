import {MinStack} from '../script'

describe('155. Min Stack', (): void => {
    it('Test', (): void => {
        const minStack: MinStack = new MinStack()

        minStack.push(-2)
        minStack.push(-2)
        minStack.push(0)
        minStack.push(-3)

        const min1: number = minStack.getMin()
        expect(min1).toBe(-3)

        minStack.pop()
        const top: number = minStack.top()
        expect(top).toBe(0)

        const min2: number = minStack.getMin()
        expect(min2).toBe(-2)
    })

    it('Test Empty', (): void => {
        const minStack: MinStack = new MinStack()

        expect(() => minStack.getMin())
            .toThrowError("No data")

        minStack.push(1)
        expect(minStack.getMin())
            .toBe(1)

        minStack.pop()
        expect(() => minStack.getMin())
            .toThrowError("No data")
    })

})
