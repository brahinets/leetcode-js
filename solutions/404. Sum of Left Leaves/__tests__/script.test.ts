import {sumOfLeftLeaves, TreeNode} from '../script'

describe('404. Sum of Left Leaves', (): void => {

    it('Empty tree', (): void => {
        expect(sumOfLeftLeaves(null))
            .toBe(0)
    })

    it('Short tree', (): void => {
        expect(sumOfLeftLeaves(
            new TreeNode(1)
        )).toBe(0)
    })

    it('Mid tree', (): void => {
        expect(sumOfLeftLeaves(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)),
                new TreeNode(3)
            ))).toBe(4)
    })

    it('Short lefty tree', (): void => {
        expect(sumOfLeftLeaves(
            new TreeNode(1,
                new TreeNode(3),
                null
            ))).toBe(3)
    })

    it('Short righty tree', (): void => {
        expect(sumOfLeftLeaves(
            new TreeNode(1,
                null,
                new TreeNode(3)
            ))).toBe(0)
    })

    it('Long tree', (): void => {
        expect(sumOfLeftLeaves(
            new TreeNode(3,
                new TreeNode(9),
                new TreeNode(20,
                    new TreeNode(15),
                    new TreeNode(7))
            )
        )).toBe(24)
    })
})
