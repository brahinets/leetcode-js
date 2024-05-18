import {distributeCoins} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('979. Distribute Coins in Binary Tree', (): void => {

    it('Move to leafs', (): void => {
        expect(distributeCoins(arrayToTree([3, 0, 0])))
            .toBe(2)
    })

    it('Move from leafs', (): void => {
        expect(distributeCoins(arrayToTree([0, 3, 0])))
            .toBe(3)
    })
})
