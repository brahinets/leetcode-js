import {MyStack} from "../script"

describe('225. Implement Stack using Queues', (): void => {
    it('Test ', (): void => {
        const myStack: MyStack = new MyStack()
        myStack.push(1)
        myStack.push(2)

        const top: number = myStack.top()
        expect(top).toBe(2)

        const pop: number = myStack.pop()
        expect(pop).toBe(2)

        const empty: boolean = myStack.empty()
        expect(empty).toBe(false)
    })
})
