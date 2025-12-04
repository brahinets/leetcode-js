import {countCollisions} from '../script'

describe('2211. Count Collisions on a Road', (): void => {
    it('Collisions will happen', (): void => {
        expect(countCollisions("RLRSLL"))
            .toBe(5)
    })

    it('Collisions will not happen', (): void => {
        expect(countCollisions("LLRR"))
            .toBe(0)
    })
})
