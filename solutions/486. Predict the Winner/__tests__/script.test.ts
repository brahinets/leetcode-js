import {PredictTheWinner} from '../script'

describe('486. Predict the Winner', (): void => {
    it('Cannot win', (): void => {
        expect(PredictTheWinner([1, 5, 2]))
            .toBe(false);
    });

    it('Can win easy', (): void => {
        expect(PredictTheWinner([1, 5, 233, 7]))
            .toBe(true);
    });

    it('Can win by equality', (): void => {
        expect(PredictTheWinner([1, 1, 1, 1]))
            .toBe(true);
    });
})
