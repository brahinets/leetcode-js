import {findAllPeople} from '../script'

describe('2092. Find All People With Secret', (): void => {

    it('Everyone will know', (): void => {
        expect(findAllPeople(5, [[3, 4, 2], [1, 2, 1], [2, 3, 1]], 1))
            .toEqual([0, 1, 2, 3, 4])
    })

    it('Half will know', (): void => {
        expect(findAllPeople(4, [[3, 1, 3], [1, 2, 2], [0, 3, 3]], 3))
            .toEqual([0, 1, 3])
    })

    it('Some will know', (): void => {
        expect(findAllPeople(6, [[1, 2, 5], [2, 3, 8], [1, 5, 10]], 1))
            .toEqual([0, 1, 2, 3, 5])
    })
})
