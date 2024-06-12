import {sortColors} from '../script'

describe('75. Sort Colors', (): void => {

    it('First', (): void => {
        const colors: number[] = [2, 0, 2, 1, 1, 0]

        sortColors(colors)

        expect(colors).toEqual([0, 0, 1, 1, 2, 2])
    })

    it('Second', (): void => {
        const colors: number[] = [2, 0, 1]

        sortColors(colors)

        expect(colors).toEqual([0, 1, 2])
    })
})
