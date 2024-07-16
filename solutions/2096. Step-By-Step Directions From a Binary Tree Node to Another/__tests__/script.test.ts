import {getDirections} from "../script"
import {arrayToTree} from "../../../common/tree-utils";

describe('2096. Step-By-Step Directions From a Binary Tree Node to Another', (): void => {

    it('Move up', (): void => {
        expect(getDirections(arrayToTree([5, 1, 2, 3, null, 6, 4]), 3, 6))
            .toBe("UURL")
    })

    it('Move down', (): void => {
        expect(getDirections(arrayToTree([2, 1]), 2, 1))
            .toBe("L")
    })
})
