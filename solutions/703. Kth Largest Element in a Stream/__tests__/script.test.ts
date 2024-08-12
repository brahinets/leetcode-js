import {KthLargest} from '../script'

describe('703. Kth Largest Element in a Stream', (): void => {
    it('Verify', (): void => {
        const data: KthLargest = new KthLargest(3, [4, 5, 8, 2])
        let result: number

        result = data.add(3)
        expect(result).toBe(4)

        result = data.add(5)
        expect(result).toBe(5)

        result = data.add(10)
        expect(result).toBe(5)

        result = data.add(9)
        expect(result).toBe(8)

        result = data.add(4)
        expect(result).toBe(8)
    })

    it('Verify with smaller initial size', (): void => {
        const data: KthLargest = new KthLargest(3, [5, -1])
        let result: number

        result = data.add(2)
        expect(result).toBe(-1)

        result = data.add(1)
        expect(result).toBe(1)

        result = data.add(-1)
        expect(result).toBe(1)

        result = data.add(3)
        expect(result).toBe(2)

        result = data.add(4)
        expect(result).toBe(3)
    })
})
