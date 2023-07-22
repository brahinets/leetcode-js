import {knightProbability} from '../script'

describe('688. Knight Probability in Chessboard', (): void => {
    it('Will not leave the board with few steps', (): void => {
        expect(knightProbability(1, 0, 0, 0))
            .toStrictEqual(1);
    });

    it('Will leave the board. Already out of the board', (): void => {
        expect(knightProbability(1, 1, -1, -1))
            .toStrictEqual(0);
    });

    it('Most likely will leave the board with few steps', (): void => {
        expect(knightProbability(3, 2, 0, 0))
            .toStrictEqual(0.06250);
    });
})
