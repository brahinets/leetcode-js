import {sumNumbers, TreeNode} from '../script'

describe('129. Sum Root to Leaf Numbers', (): void => {

    it('Simple tree', (): void => {
        expect(sumNumbers(
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3))))
            .toBe(25)
    })

    it('Complex tree', (): void => {
        expect(sumNumbers(
            new TreeNode(4,
                new TreeNode(9,
                    new TreeNode(5),
                    new TreeNode(1)),
                new TreeNode(0))))
            .toBe(1026)
    })
})
