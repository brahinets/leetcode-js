import {triangleNumber} from '../script'

describe('611. Valid Triangle Number', (): void => {
    it('Few', (): void => {
        expect(triangleNumber([2, 2, 3, 4]))
            .toBe(3)
    })

    it('Many', (): void => {
        expect(triangleNumber([4, 2, 3, 4]))
            .toBe(4)
    })
})
