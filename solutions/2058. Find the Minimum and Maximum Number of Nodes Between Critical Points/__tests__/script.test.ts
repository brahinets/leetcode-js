import {nodesBetweenCriticalPoints} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('2058. Find the Minimum and Maximum Number of Nodes Between Critical Points', (): void => {
    it('No critical points', (): void => {
        expect(nodesBetweenCriticalPoints(linkedListOf(3, 1)))
            .toEqual([-1, -1])
    })

    it('Multiple critical points', (): void => {
        expect(nodesBetweenCriticalPoints(linkedListOf(5, 3, 1, 2, 5, 1, 2)))
            .toEqual([1, 3])
    })

    it('Two critical points', (): void => {
        expect(nodesBetweenCriticalPoints(linkedListOf(1, 3, 2, 2, 3, 2, 2, 2, 7)))
            .toEqual([3, 3])
    })
})
