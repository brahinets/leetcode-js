import {reverseKGroup} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('25. Reverse Nodes in k-Group', (): void => {
    it('Reverse full', (): void => {
        expect(reverseKGroup(linkedListOf(1, 2, 3, 4, 5), 2))
            .toStrictEqual(linkedListOf(2, 1, 4, 3, 5))
    })

    it('Reverse part', (): void => {
        expect(reverseKGroup(linkedListOf(1, 2, 3, 4, 5), 3))
            .toStrictEqual(linkedListOf(3, 2, 1, 4, 5))
    })
})
