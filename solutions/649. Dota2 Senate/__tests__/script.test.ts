import {predictPartyVictory} from '../script'

describe('649. Dota2 Senate', (): void => {
    it('Immediate win', (): void => {
        expect(predictPartyVictory("RRR"))
            .toBe("Radiant");
    });

    it('Radiant win', (): void => {
        expect(predictPartyVictory("RD"))
            .toBe("Radiant");
    });

    it('Dire win', (): void => {
        expect(predictPartyVictory("RDD"))
            .toBe("Dire");
    });

    it('Dire win again', (): void => {
        expect(predictPartyVictory("DDRRR"))
            .toBe("Dire");
    });
})