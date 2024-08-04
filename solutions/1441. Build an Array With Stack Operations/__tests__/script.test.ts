import {buildArray} from '../script'

describe('1441. Build an Array With Stack Operations', (): void => {

    it('Add and remove', (): void => {
        expect(buildArray([1, 3], 3))
            .toStrictEqual(["Push", "Push", "Pop", "Push"])
    })

    it('Only add', (): void => {
        expect(buildArray([1, 2, 3], 3))
            .toStrictEqual(["Push", "Push", "Push"])
    })

    it('Only add #2', (): void => {
        expect(buildArray([1, 2], 4))
            .toStrictEqual(["Push", "Push"])
    })
})
