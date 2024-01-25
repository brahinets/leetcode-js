import {amountOfTime, TreeNode} from '../script'

describe('2385. Amount of Time for Binary Tree to Be Infected', (): void => {

    it('The only node infect at the beginning', (): void => {
        expect(amountOfTime(
            new TreeNode(1), 1
        )).toBe(0)
    })

    it('Start node is on the root', (): void => {
        expect(amountOfTime(
            new TreeNode(1,
                new TreeNode(5,
                    null,
                    new TreeNode(4,
                        new TreeNode(9),
                        new TreeNode(2))),
                new TreeNode(3,
                    new TreeNode(10),
                    new TreeNode(6))),
            1
        )).toBe(3)
    })

    it('Start node not in root', (): void => {
        expect(amountOfTime(
            new TreeNode(1,
                new TreeNode(5,
                    null,
                    new TreeNode(4,
                        new TreeNode(9),
                        new TreeNode(2))),
                new TreeNode(3,
                    new TreeNode(10),
                    new TreeNode(6))),
            3
        )).toBe(4)
    })
})
