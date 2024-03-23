import {cherryPickup} from '../script'

describe('1463. Cherry Pickup II', (): void => {
    it('Moving by borders', (): void => {
        expect(cherryPickup( [[3,1,1],
            [2,5,1],
            [1,5,5],
            [2,1,1]
        ])).toBe(24)
    })

    it('Moving to center', (): void => {
        expect(cherryPickup([
            [1,0,0,0,0,0,1],
            [2,0,0,0,0,3,0],
            [2,0,9,0,0,0,0],
            [0,3,0,5,4,0,0],
            [1,0,2,3,0,0,6]
        ])).toBe(28)
    })
})
