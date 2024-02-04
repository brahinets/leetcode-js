import {MyQueue} from '../script'

describe('232. Implement Queue using Stacks', (): void => {
    it('Can add element', (): void => {
        const myQueue: MyQueue = new MyQueue()

        myQueue.push(1)
        myQueue.push(2)

        expect(myQueue.peek()).toBe(1)
        expect(myQueue.pop()).toBe(1)
        expect(myQueue.empty()).toBe(false)

        expect(myQueue.peek()).toBe(2)
        expect(myQueue.pop()).toBe(2)
        expect(myQueue.empty()).toBe(true)
    })
})
