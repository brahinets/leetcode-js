import {partition} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('86. Partition List', (): void => {

    it('Partition long list', (): void => {
        expect(partition(linkedListOf(1, 4, 3, 2, 5, 2), 3))
            .toStrictEqual(linkedListOf(1, 2, 2, 4, 3, 5))
    })

    it('Reverse short list', (): void => {
        expect(partition(linkedListOf(2, 1), 2))
            .toStrictEqual(linkedListOf(1, 2))
    })

    it('Reverse empty list', (): void => {
        expect(partition(linkedListOf(), 2))
            .toStrictEqual(null)
    })
})
