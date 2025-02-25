import {maxPoints} from '../script'

describe('1937. Maximum Number of Points with Cost', (): void => {

    it('First', (): void => {
        expect(maxPoints([[1,2,3],[1,5,1],[3,1,1]]))
            .toBe(9)
    })

    it('Second', (): void => {
        expect(maxPoints([[1,5],[2,3],[4,2]]))
            .toBe(11)
    })
})
