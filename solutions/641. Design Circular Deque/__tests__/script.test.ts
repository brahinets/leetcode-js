import {MyCircularDeque} from '../script'

describe('641. Design Circular Deque', (): void => {
    it('Test', (): void => {
        const myCircularDeque: MyCircularDeque = new MyCircularDeque(3)

        expect(myCircularDeque.insertLast(1)).toBe(true)
        expect(myCircularDeque.insertLast(2)).toBe(true)
        expect(myCircularDeque.insertFront(3)).toBe(true)
        expect(myCircularDeque.insertFront(4)).toBe(false)
        expect(myCircularDeque.getRear()).toBe(2)
        expect(myCircularDeque.isFull()).toBe(true)
        expect(myCircularDeque.deleteLast()).toBe(true)
        expect(myCircularDeque.insertFront(4)).toBe(true)
        expect(myCircularDeque.getFront()).toBe(4)
        expect(myCircularDeque.deleteFront()).toBe(true)
        expect(myCircularDeque.getFront()).toBe(3)
    })
})
