import {imageSmoother} from '../script'

describe('661. Image Smoother', (): void => {

    it('Smooth to white', (): void => {
        expect(imageSmoother([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ])).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ])
    })

    it('Smooth to smoother', (): void => {
        expect(imageSmoother([
            [100, 200, 100],
            [200, 50, 200],
            [100, 200, 100]
        ])).toEqual([
            [137, 141, 137],
            [141, 138, 141],
            [137, 141, 137]
        ])
    })
})

