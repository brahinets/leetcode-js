import {Router} from '../script'

describe('3508. Implement Router', (): void => {
    it('One', (): void => {
        const router: Router = new Router(3)

        expect(router.addPacket(1, 4, 90)).toEqual(true)
        expect(router.addPacket(2, 5, 90)).toEqual(true)
        expect(router.addPacket(1, 4, 90)).toEqual(false)
        expect(router.addPacket(3, 5, 95)).toEqual(true)
        expect(router.addPacket(4, 5, 105)).toEqual(true)
        expect(router.forwardPacket()).toEqual([2, 5, 90])
        expect(router.addPacket(5, 2, 110)).toEqual(true)
        expect(router.getCount(5, 100, 110)).toEqual(1)
    })

    it('Two', (): void => {
        const router: Router = new Router(2)
        expect(router.addPacket(7, 4, 90)).toEqual(true)
        expect(router.forwardPacket()).toEqual([7, 4, 90])
        expect(router.forwardPacket()).toEqual([])
    })
})
