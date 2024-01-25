import {TreeNode, treeToGraph} from "../tree-utils"

describe('Graph representation', (): void => {

    it('Big Graph', (): void => {
        const graph: Map<number, Set<number>> = treeToGraph(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)),
                new TreeNode(3,
                    new TreeNode(6),
                    new TreeNode(7))
            )
        )

        expect(graph.get(1)).toEqual(new Set([2, 3]))
        expect(graph.get(2)).toEqual(new Set([1, 4, 5]))
        expect(graph.get(3)).toEqual(new Set([1, 6, 7]))
        expect(graph.get(4)).toEqual(new Set([2]))
        expect(graph.get(5)).toEqual(new Set([2]))
        expect(graph.get(6)).toEqual(new Set([3]))
        expect(graph.get(7)).toEqual(new Set([3]))
    })
})
