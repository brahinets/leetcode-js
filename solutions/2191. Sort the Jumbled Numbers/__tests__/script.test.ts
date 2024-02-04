import {sortJumbled} from '../script'

describe('2191. Sort the Jumbled Numbers', (): void => {
    it('Has same mapping', (): void => {
        expect(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
            .toStrictEqual([338, 38, 991])
    })

    it('All different mappings', (): void => {
        expect(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]))
            .toStrictEqual([123, 456, 789])
    })

    it('All different mappings and length', (): void => {
        expect(sortJumbled([5, 6, 8, 7, 4, 0, 3, 1, 9, 2], [7686, 97012948, 84234023, 2212638, 99]))
            .toStrictEqual([99, 7686, 2212638, 97012948, 84234023])
    })
})
