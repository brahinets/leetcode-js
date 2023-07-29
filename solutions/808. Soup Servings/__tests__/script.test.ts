import {soupServings} from '../script'

describe('808. Soup Servings', (): void => {
    it('Mid precision', (): void => {
        expect(soupServings(50))
            .toBeCloseTo(0.62500, 5);
    });

    it('Low precision', (): void => {
        expect(soupServings(100))
            .toBeCloseTo(0.71875, 5);
    });
})
