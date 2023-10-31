import {isSameTree, TreeNode} from '../script'

describe('100. Same Tree', (): void => {

    it('The same', (): void => {
        expect(isSameTree(
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)
            ),
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)
            )
        )).toBe(true);
    })

    it('Not same toot', (): void => {
        expect(isSameTree(
            new TreeNode(1),
            new TreeNode(2)
        )).toBe(false);
    })

    it('Missing node', (): void => {
        expect(isSameTree(
            new TreeNode(1,
                new TreeNode(2),
                null
            ),
            new TreeNode(1,
                null,
                new TreeNode(2)
            )
        )).toBe(false);
    })

    it('Swapped node', (): void => {
        expect(isSameTree(
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(1)
            ),
            new TreeNode(1,
                new TreeNode(1),
                new TreeNode(2)
            )
        )).toBe(false)
    })
})
