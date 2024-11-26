import {findChampion} from '../script'

describe('2924. Find Champion II', (): void => {
    it('One champion', (): void => {
        expect(findChampion(3, [[0, 1], [1, 2]]))
            .toBe(0)
    })

    it('No unique champion', (): void => {
        expect(findChampion(4, [[0, 2], [1, 3], [1, 2]]))
            .toBe(-1)
    })
})
