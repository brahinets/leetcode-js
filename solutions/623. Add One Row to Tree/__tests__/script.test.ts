import {addOneRow, TreeNode} from '../script'

describe('623. Add One Row to Tree', (): void => {
    it('Empty Tree', (): void => {
        expect(addOneRow(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(3),
                    new TreeNode(1)),
                new TreeNode(6,
                    new TreeNode(5)))
            , 1, 2))
            .toStrictEqual(
                new TreeNode(4,
                    new TreeNode(1,
                        new TreeNode(2,
                            new TreeNode(3),
                            new TreeNode(1)),
                        null),
                    new TreeNode(1,
                        null,
                        new TreeNode(6,
                            new TreeNode(5)))
                ))
    })


    it('Empty Tree', (): void => {
        expect(addOneRow(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(3),
                    new TreeNode(1)),
                null)
            , 1, 3))
            .toStrictEqual(
                new TreeNode(4,
                    new TreeNode(2,
                        new TreeNode(1,
                            new TreeNode(3),
                            null),
                        new TreeNode(1,
                            null,
                            new TreeNode(1))),
                    null
                )
            )
    })
})
