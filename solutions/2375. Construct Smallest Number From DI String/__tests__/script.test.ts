import {smallestNumber} from '../script'

describe('2375. Construct Smallest Number From DI String', (): void => {
    it('One', (): void => {
        expect(smallestNumber("IIIDIDDD"))
            .toBe("123549876")
    })

    it('Two', (): void => {
        expect(smallestNumber("DDD"))
            .toBe("4321")
    })
})
