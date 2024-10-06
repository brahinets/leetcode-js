import {validateBinaryTreeNodes} from "../script"

describe('1361. Validate Binary Tree Nodes', (): void => {

    it('Valid tree', (): void => {
        expect(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]))
            .toBe(true)
    })

    it('Valid tree #2', (): void => {
        expect(validateBinaryTreeNodes(4, [3, -1, 1, -1], [-1, -1, 0, -1]))
            .toBe(true)
    })

    it('Invalid tree', (): void => {
        expect(validateBinaryTreeNodes(3, [1, -1, -1], [-1, -1, 1]))
            .toBe(false)
    })

    it('Invalid joined tree', (): void => {
        expect(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1]))
            .toBe(false)
    })

    it('Invalid cyclic tree', (): void => {
        expect(validateBinaryTreeNodes(2, [1, 0], [-1, -1]))
            .toBe(false)
    })
})
