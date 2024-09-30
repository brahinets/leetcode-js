import {CustomStack} from '../script'

describe('1381. Design a Stack With Increment Operation', (): void => {
    it('One', (): void => {
        const stack: CustomStack = new CustomStack(3)
        stack.push(1)
        stack.push(2)
        expect(stack.pop()).toBe(2)

        stack.push(2)
        stack.push(3)
        stack.push(4)
        stack.increment(5, 100)
        stack.increment(2, 100)

        expect(stack.pop()).toBe(103)
        expect(stack.pop()).toBe(202)
        expect(stack.pop()).toBe(201)
        expect(stack.pop()).toBe(-1)
    })
})
