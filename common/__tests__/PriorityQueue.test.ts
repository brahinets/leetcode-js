import {PriorityQueue} from "../PriorityQueue"

describe('PriorityQueue Test', (): void => {
    const ascendingNumbersSorting = (a: number, b: number): number => a - b

    it('Empty queue', (): void => {
        const pq: PriorityQueue<number> = new PriorityQueue<number>(ascendingNumbersSorting)
        expect(pq.size()).toBe(0)
    })

    it('Enqueue adds', (): void => {
        const pq: PriorityQueue<number> = new PriorityQueue<number>(ascendingNumbersSorting)
        pq.enqueue(1)

        expect(pq.size()).toBe(1)
        expect(pq.peek()).toBe(1)
    })

    it('Peek always returns first', (): void => {
        const pq: PriorityQueue<number> = new PriorityQueue<number>(ascendingNumbersSorting)
        pq.enqueue(2)
        pq.enqueue(1)

        expect(pq.peek()).toEqual(1)
        expect(pq.peek()).toEqual(1)
    })

    it('Dequeue removes first', (): void => {
        const pq: PriorityQueue<number> = new PriorityQueue<number>(ascendingNumbersSorting)
        pq.enqueue(3)
        pq.enqueue(1)
        pq.enqueue(2)

        expect(pq.dequeue()).toEqual(1)
        expect(pq.dequeue()).toEqual(2)
        expect(pq.dequeue()).toEqual(3)
        expect(pq.dequeue()).toEqual(undefined)
    })

    it('Duplicates handle', (): void => {
        const pq: PriorityQueue<number> = new PriorityQueue<number>(ascendingNumbersSorting)
        pq.enqueue(1)
        pq.enqueue(1)
        pq.enqueue(2)
        pq.enqueue(3)
        pq.enqueue(3)

        expect(pq.dequeue()).toEqual(1)
        expect(pq.dequeue()).toEqual(1)
        expect(pq.dequeue()).toEqual(2)
        expect(pq.dequeue()).toEqual(3)
        expect(pq.dequeue()).toEqual(3)
        expect(pq.dequeue()).toEqual(undefined)
    })
})
