export {ParkingSystem}

class ParkingSystem {
    private bigCapacity: number;
    private mediumCapacity: number;
    private smallCapacity: number;

    constructor(small: number, medium: number, big: number) {
        this.smallCapacity = small;
        this.mediumCapacity = medium;
        this.bigCapacity = big;
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                return --this.smallCapacity >= 0;
            case 2:
                return --this.mediumCapacity >= 0;
            case 3:
                return --this.bigCapacity >= 0;
        }

        throw new Error("Unsupported car type provided");
    }
}