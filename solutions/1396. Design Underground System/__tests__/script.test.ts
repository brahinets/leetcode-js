import {UndergroundSystem} from "../script";

describe('1396. Design Underground System', (): void => {
    it('Test Valid', (): void => {
        const undergroundSystem: UndergroundSystem = new UndergroundSystem()
        let average: number;

        undergroundSystem.checkIn(10, "Leyton", 3);
        undergroundSystem.checkOut(10, "Paradise", 8);
        average = undergroundSystem.getAverageTime("Leyton", "Paradise");
        expect(average).toBeCloseTo(5, 5);

        undergroundSystem.checkIn(5, "Leyton", 10);
        undergroundSystem.checkOut(5, "Paradise", 16);
        average = undergroundSystem.getAverageTime("Leyton", "Paradise");
        expect(average).toBeCloseTo(5.5, 5);

        undergroundSystem.checkIn(2, "Leyton", 21);
        undergroundSystem.checkOut(2, "Paradise", 30);
        average = undergroundSystem.getAverageTime("Leyton", "Paradise");
        expect(average).toBeCloseTo(6.66667, 5);
    });

    it('Client cannot commute in two places simultaneously', (): void => {
        const undergroundSystem: UndergroundSystem = new UndergroundSystem()

        undergroundSystem.checkIn(10, "Leyton", 3);
        expect(() => undergroundSystem.checkIn(10, "Leyton", 21))
            .toThrow("Client is already commuting");
    });

    it('Client cannot finish commute when idle', (): void => {
        const undergroundSystem: UndergroundSystem = new UndergroundSystem()

        undergroundSystem.checkIn(10, "Leyton", 3);
        undergroundSystem.checkOut(10, "Leyton", 5);

        expect(() => undergroundSystem.checkOut(10, "Leyton", 6))
            .toThrow("Client is not commuting");
    });

    it('Average is zero when no commutes found for station', (): void => {
        const undergroundSystem: UndergroundSystem = new UndergroundSystem()

        const average: number = undergroundSystem.getAverageTime("Leyton", "Paradise");
        expect(average).toBe(0);
    });
})
