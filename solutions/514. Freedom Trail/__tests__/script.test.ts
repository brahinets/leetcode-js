import {findRotateSteps} from '../script'

describe('514. Freedom Trail', (): void => {

    it('Rotate to different sides', (): void => {
        expect(findRotateSteps("godding", "gd"))
            .toBe(4)
    })

    it('Rotate multiple times one letter', (): void => {
        expect(findRotateSteps("godding", "godding"))
            .toBe(13)
    })

    it('Just submit', (): void => {
        expect(findRotateSteps("g", "g"))
            .toBe(1)
    })
})
