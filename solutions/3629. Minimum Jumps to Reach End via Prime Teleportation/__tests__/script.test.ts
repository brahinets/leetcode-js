import { minJumps } from '../script'

describe('3629. Minimum Jumps to Reach End via Prime Teleportation', (): void => {
    it('reaches end via adjacent step then prime teleportation', (): void => {
        const numbers: number[] = [1, 2, 4, 6]

        const result: number = minJumps(numbers)

        expect(result).toBe(2)
    })

    it('reaches end via adjacent step then teleportation through shared prime factor', (): void => {
        const numbers: number[] = [2, 3, 4, 7, 9]

        const result: number = minJumps(numbers)

        expect(result).toBe(2)
    })

    it('reaches end via adjacent steps only when prime has no divisible targets', (): void => {
        const numbers: number[] = [4, 6, 5, 8]

        const result: number = minJumps(numbers)

        expect(result).toBe(3)
    })

    it('single element array already at destination', (): void => {
        const numbers: number[] = [7]

        const result: number = minJumps(numbers)

        expect(result).toBe(0)
    })

    it('two elements with prime teleportation reaching end in one jump', (): void => {
        const numbers: number[] = [2, 4]

        const result: number = minJumps(numbers)

        expect(result).toBe(1)
    })

    it('two elements requiring adjacent step when no prime teleportation applies', (): void => {
        const numbers: number[] = [1, 1]

        const result: number = minJumps(numbers)

        expect(result).toBe(1)
    })

    it('direct teleportation from start to end when end value divisible by start prime', (): void => {
        const numbers: number[] = [3, 5, 7, 9]

        const result: number = minJumps(numbers)

        expect(result).toBe(1)
    })

    it('all non-prime values require full sequential adjacent traversal', (): void => {
        const numbers: number[] = [1, 1, 1, 1, 1]

        const result: number = minJumps(numbers)

        expect(result).toBe(4)
    })

    it('adjacent step to prime then single teleportation to composite destination', (): void => {
        const numbers: number[] = [1, 2, 1, 1, 6]

        const result: number = minJumps(numbers)

        expect(result).toBe(2)
    })

    it('teleportation from intermediate prime shortens path over pure adjacent traversal', (): void => {
        const numbers: number[] = [4, 1, 2, 1, 8]

        const result: number = minJumps(numbers)

        expect(result).toBe(3)
    })

    it('load test', (): void => {
        const numbers: number[] = [
            378, 193, 1018, 669, 858, 294, 382, 224, 1093, 509, 719, 416, 471,
            890, 131, 560, 883, 59, 178, 480, 788, 359, 54, 768, 1054, 787, 908,
            691, 747, 77, 197, 1143, 673, 705
        ]

        const result: number = minJumps(numbers)

        expect(result).toBe(33)
    })
})
