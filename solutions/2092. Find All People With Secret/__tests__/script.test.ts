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

    it('Some will know #2', (): void => {
        expect(findAllPeople(11, [[5, 1, 4], [0, 4, 18]], 1))
            .toEqual([0, 1, 4, 5])
    })

    it('Some will know #3', (): void => {
        expect(findAllPeople(12, [[10, 8, 6], [9, 5, 11], [0, 5, 18], [4, 5, 13], [11, 6, 17], [0, 11, 10], [10, 11, 7], [5, 8, 3], [7, 6, 16], [3, 6, 10], [3, 11, 1], [8, 3, 2], [5, 0, 7], [3, 8, 20], [11, 0, 20], [8, 3, 4], [1, 9, 4], [10, 7, 11], [8, 10, 18]], 9))
            .toEqual([0, 1, 4, 5, 6, 9, 11])
    })
})
