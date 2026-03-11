import { BSTIterator, TreeNode } from '../script'

describe('173. Binary Search Tree Iterator', (): void => {
    it('iterates in sorted order over a balanced BST', (): void => {
        const root: TreeNode = new TreeNode(7,
            new TreeNode(3),
            new TreeNode(15,
                new TreeNode(9),
                new TreeNode(20)
            )
        )
        const iterator: BSTIterator = new BSTIterator(root)

        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(3)
        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(7)
        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(9)
        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(15)
        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(20)
        expect(iterator.hasNext()).toBe(false)
    })

    it('iterates over a single-node BST', (): void => {
        const iterator: BSTIterator = new BSTIterator(new TreeNode(42))

        expect(iterator.hasNext()).toBe(true)
        expect(iterator.next()).toBe(42)
        expect(iterator.hasNext()).toBe(false)
    })

    it('iterates over a left-skewed BST', (): void => {
        const root: TreeNode = new TreeNode(3,
            new TreeNode(2,
                new TreeNode(1)
            )
        )
        const iterator: BSTIterator = new BSTIterator(root)

        expect(iterator.next()).toBe(1)
        expect(iterator.next()).toBe(2)
        expect(iterator.next()).toBe(3)
        expect(iterator.hasNext()).toBe(false)
    })

    it('iterates over a right-skewed BST', (): void => {
        const root: TreeNode = new TreeNode(1,
            null,
            new TreeNode(2,
                null,
                new TreeNode(3)
            )
        )
        const iterator: BSTIterator = new BSTIterator(root)

        expect(iterator.next()).toBe(1)
        expect(iterator.next()).toBe(2)
        expect(iterator.next()).toBe(3)
        expect(iterator.hasNext()).toBe(false)
    })
})
