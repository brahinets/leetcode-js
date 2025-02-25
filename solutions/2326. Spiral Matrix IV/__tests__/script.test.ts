import {spiralMatrix} from '../script'
import {linkedListOf} from "../../../common/list-factories";

describe('2326. Spiral Matrix IV', (): void => {
    it('Single row', (): void => {
        expect(spiralMatrix(1, 4, linkedListOf(0, 1, 2)))
            .toStrictEqual([[0, 1, 2, -1]])
    })

    it('Square', (): void => {
        expect(spiralMatrix(3, 5, linkedListOf(3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0)))
            .toStrictEqual([[3, 0, 2, 6, 8], [5, 0, -1, -1, 1], [5, 2, 4, 9, 7]])
    })
})
