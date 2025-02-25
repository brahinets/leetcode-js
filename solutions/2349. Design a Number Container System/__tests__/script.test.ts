import {NumberContainers} from '../script'

describe('2349. Design a Number Container System', (): void => {
    it('One', (): void => {
        const nc: NumberContainers = new NumberContainers()
        expect(nc.find(10))
            .toBe(-1)

        nc.change(2, 10)
        nc.change(1, 10)
        nc.change(3, 10)
        nc.change(5, 10)
        expect(nc.find(10))
            .toBe(1)

        nc.change(1, 20)
        expect(nc.find(10))
            .toBe(2)
    })
})
