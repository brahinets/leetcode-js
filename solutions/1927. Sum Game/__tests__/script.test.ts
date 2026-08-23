import {sumGame} from '../script'

describe('1927. Sum Game', (): void => {
    it('first half sum already equals second half sum with no question marks', (): void => {
        expect(sumGame('5023')).toBe(false)
    })

    it('alice can force an unequal sum with a single replacement', (): void => {
        expect(sumGame('25??')).toBe(true)
    })

    it('bob wins through optimal responses across multiple question marks', (): void => {
        expect(sumGame('?3295???')).toBe(false)
    })

    it('odd total question mark count guarantees alice victory', (): void => {
        expect(sumGame('5?23')).toBe(true)
    })

    it('all characters are question marks with equal counts on each half', (): void => {
        expect(sumGame('??')).toBe(false)
    })

    it('minimum length string with already unequal digit sums', (): void => {
        expect(sumGame('12')).toBe(true)
    })

    it('uneven question mark distribution between halves favors alice', (): void => {
        expect(sumGame('1??4')).toBe(true)
    })

    it('large all question mark input completes efficiently', (): void => {
        const largeInput: string = '?'.repeat(100000)

        expect(sumGame(largeInput)).toBe(false)
    })
})
