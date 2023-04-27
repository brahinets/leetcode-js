import {bulbSwitch} from '../script'

describe('319. Bulb Switcher', (): void => {
    it('Zero', (): void => {
        expect(bulbSwitch(0))
            .toBe(0);
    });

    it('On all', (): void => {
        expect(bulbSwitch(1))
            .toBe(1);
    });

    it('On some', (): void => {
        expect(bulbSwitch(3))
            .toBe(1);
    });
})