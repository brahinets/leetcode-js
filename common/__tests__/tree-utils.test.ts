import {arrayToTree, TreeNode, treeToArray, treeToGraph} from "../tree-utils"

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

describe('Tree factory', (): void => {
    it('Empty tree', (): void => {
        expect(arrayToTree([]))
            .toEqual(null)
    })

    it('Null tree', (): void => {
        expect(arrayToTree([null]))
            .toEqual(null)
    })

    it('Root tree', (): void => {
        expect(arrayToTree([1]))
            .toEqual(new TreeNode(1))
    })

    it('Full tree', (): void => {
        expect(arrayToTree([1, 11, 12, 111, 112, 121, 122]))
            .toEqual(
                new TreeNode(1,
                    new TreeNode(11,
                        new TreeNode(111),
                        new TreeNode(112)),
                    new TreeNode(12,
                        new TreeNode(121),
                        new TreeNode(122))))
    })

    it('Lefty tree', (): void => {
        expect(arrayToTree([1, 11, null, null, 112]))
            .toEqual(
                new TreeNode(1,
                    new TreeNode(11,
                        null,
                        new TreeNode(112)),
                    null))
    })

    it('Righty tree', (): void => {
        expect(arrayToTree([1, null, 12, null, 122]))
            .toEqual(
                new TreeNode(1,
                    null,
                    new TreeNode(12,
                        null,
                        new TreeNode(122))))
    })

    it('Middle tree', (): void => {
        expect(arrayToTree([1, 11, 12, null, 112, 121, null]))
            .toEqual(
                new TreeNode(1,
                    new TreeNode(11,
                        null,
                        new TreeNode(112)),
                    new TreeNode(12,
                        new TreeNode(121),
                        null)))
    })

    it('Sides tree', (): void => {
        expect(arrayToTree([1, 11, 12, 111, null, null, 122]))
            .toEqual(
                new TreeNode(1,
                    new TreeNode(11,
                        new TreeNode(111),
                        null),
                    new TreeNode(12,
                        null,
                        new TreeNode(122))))
    })
})

describe('Tree to plain array', (): void => {
    it('Empty tree', (): void => {
        expect(treeToArray(null))
            .toEqual([])
    })

    it('Null tree', (): void => {
        expect(treeToArray(null))
            .toEqual([])
    })

    it('Root tree', (): void => {
        expect(treeToArray(new TreeNode(1)))
            .toEqual([1])
    })

    it('Full tree', (): void => {
        expect(treeToArray(
            new TreeNode(1,
                new TreeNode(11,
                    new TreeNode(111),
                    new TreeNode(112)),
                new TreeNode(12,
                    new TreeNode(121),
                    new TreeNode(122)))))
            .toEqual([1, 11, 12, 111, 112, 121, 122])
    })

    it('Lefty tree', (): void => {
        expect(treeToArray(
            new TreeNode(1,
                new TreeNode(11,
                    null,
                    new TreeNode(112)),
                null)))
            .toEqual([1, 11, null, null, 112])
    })

    it('Righty tree', (): void => {
        expect(treeToArray(
            new TreeNode(1,
                null,
                new TreeNode(12,
                    null,
                    new TreeNode(122)))))
            .toEqual([1, null, 12, null, 122])
    })

    it('Middle tree', (): void => {
        expect(treeToArray(
            new TreeNode(1,
                new TreeNode(11,
                    null,
                    new TreeNode(112)),
                new TreeNode(12,
                    new TreeNode(121),
                    null))))
            .toEqual([1, 11, 12, null, 112, 121, null])
    })

    it('Sides tree', (): void => {
        expect(treeToArray(new TreeNode(1,
            new TreeNode(11,
                new TreeNode(111),
                null),
            new TreeNode(12,
                null,
                new TreeNode(122)))))
            .toEqual([1, 11, 12, 111, null, null, 122])
    })
})
