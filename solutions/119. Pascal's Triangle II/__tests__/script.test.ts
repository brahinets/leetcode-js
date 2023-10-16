import {getRow} from '../script'

describe('119. Pascal\'s Triangle II', (): void => {

    it('Single row', (): void => {
        expect(getRow(0))
            .toStrictEqual([1])
    })

    it('Second row', (): void => {
        expect(getRow(1))
            .toStrictEqual([1, 1])
    })

    it('Deep row', (): void => {
        expect(getRow(3))
            .toStrictEqual([1, 3, 3, 1])
    })
})
