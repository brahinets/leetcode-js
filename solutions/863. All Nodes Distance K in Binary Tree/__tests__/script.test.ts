import {distanceK} from '../script'

describe('863. All Nodes Distance K in Binary Tree', (): void => {
    it('Zero elements with distance for empty tree', (): void => {
        expect(distanceK(null, null, 3))
            .toStrictEqual([]);
    });
});
