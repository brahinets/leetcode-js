import { checkOverlap } from '../script'

describe('1401. Circle and Rectangle Overlapping', (): void => {
    it('circle and rectangle share a single boundary point', (): void => {
        const radius: number = 1
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = 1
        const y1: number = -1
        const x2: number = 3
        const y2: number = 1

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('rectangle is entirely below the circle', (): void => {
        const radius: number = 1
        const xCenter: number = 1
        const yCenter: number = 1
        const x1: number = 1
        const y1: number = -3
        const x2: number = 2
        const y2: number = -1

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(false)
    })

    it('circle center sits on a rectangle corner', (): void => {
        const radius: number = 1
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = -1
        const y1: number = 0
        const x2: number = 0
        const y2: number = 1

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('circle center is inside the rectangle', (): void => {
        const radius: number = 1
        const xCenter: number = 5
        const yCenter: number = 5
        const x1: number = 0
        const y1: number = 0
        const x2: number = 10
        const y2: number = 10

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('rectangle is entirely enclosed by the circle', (): void => {
        const radius: number = 100
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = -1
        const y1: number = -1
        const x2: number = 1
        const y2: number = 1

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('circle and rectangle are far apart', (): void => {
        const radius: number = 1
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = 10
        const y1: number = 10
        const x2: number = 20
        const y2: number = 20

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(false)
    })

    it('closest point is a rectangle corner exactly one radius away', (): void => {
        const radius: number = 5
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = 3
        const y1: number = 4
        const x2: number = 10
        const y2: number = 10

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('closest point is a rectangle corner farther than the radius', (): void => {
        const radius: number = 4
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = 3
        const y1: number = 4
        const x2: number = 10
        const y2: number = 10

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(false)
    })

    it('closest point lies on a rectangle edge exactly one radius away', (): void => {
        const radius: number = 2
        const xCenter: number = 0
        const yCenter: number = 0
        const x1: number = -5
        const y1: number = 2
        const x2: number = 5
        const y2: number = 10

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })

    it('maximum coordinate magnitudes at the limits of the constraints', (): void => {
        const radius: number = 2000
        const xCenter: number = 10000
        const yCenter: number = 10000
        const x1: number = -10000
        const y1: number = -10000
        const x2: number = 10000
        const y2: number = 10000

        const result: boolean = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)

        expect(result)
            .toBe(true)
    })
})
