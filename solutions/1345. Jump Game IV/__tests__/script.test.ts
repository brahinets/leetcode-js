import { minJumps } from '../script'

describe('1345. Jump Game IV', (): void => {

    it('single element', (): void => {
        expect(minJumps([7]))
            .toBe(0)
    })

    it('direct jump via same value to last index', (): void => {
        expect(minJumps([7, 6, 9, 6, 9, 6, 9, 7]))
            .toBe(1)
    })

    it('multiple value jumps', (): void => {
        expect(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]))
            .toBe(3)
    })

    it('two elements', (): void => {
        expect(minJumps([1, 2]))
            .toBe(1)
    })

    it('sequential steps only', (): void => {
        expect(minJumps([1, 2, 3]))
            .toBe(2)
    })

    it('all same values', (): void => {
        expect(minJumps([7, 7, 7, 7, 7]))
            .toBe(1)
    })

    it('value jump skips long path', (): void => {
        expect(minJumps([1, 2, 3, 4, 5, 6, 7, 1]))
            .toBe(1)
    })

    it('alternating values', (): void => {
        expect(minJumps([1, 2, 1, 2, 1]))
            .toBe(1)
    })
})
