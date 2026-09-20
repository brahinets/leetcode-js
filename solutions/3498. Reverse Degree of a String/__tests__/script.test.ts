import { reverseDegree } from '../script'

describe('3498. Reverse Degree of a String', (): void => {
    it('ascending letters at the start of the alphabet', (): void => {
        const input: string = 'abc'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(148)
    })

    it('alternating first and last letters of the alphabet', (): void => {
        const input: string = 'zaza'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(160)
    })

    it('single letter with the highest reversed position', (): void => {
        const input: string = 'a'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(26)
    })

    it('single letter with the lowest reversed position', (): void => {
        const input: string = 'z'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(1)
    })

    it('repeated letter weighted by growing string positions', (): void => {
        const input: string = 'zzz'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(6)
    })

    it('whole alphabet in order', (): void => {
        const input: string = 'abcdefghijklmnopqrstuvwxyz'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(3276)
    })

    it('whole alphabet reversed', (): void => {
        const input: string = 'zyxwvutsrqponmlkjihgfedcba'

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(6201)
    })

    it('maximum length string of the highest weighted letter', (): void => {
        const input: string = 'a'.repeat(1000)

        const result: number = reverseDegree(input)

        expect(result)
            .toBe(13013000)
    })
})
