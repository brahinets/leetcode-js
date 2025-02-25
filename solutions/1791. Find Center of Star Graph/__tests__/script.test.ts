import {findCenter} from '../script'

describe('1791. Find Center of Star Graph', (): void => {

    it('Connected to every of three nodes', (): void => {
        expect(findCenter([[1, 2], [2, 3], [4, 2]]))
            .toBe(2)
    })

    it('Connected to every of four nodes', (): void => {
        expect(findCenter([[1, 2], [5, 1], [1, 3], [1, 4]]))
            .toBe(1)
    })
})
