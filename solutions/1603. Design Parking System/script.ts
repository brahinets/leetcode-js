export {ParkingSystem}

class ParkingSystem {
    private big: number;
    private medium: number;
    private small: number;

    constructor(small: number, medium: number, big: number) {
        this.small = small;
        this.medium = medium;
        this.big = big;
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                return --this.small >= 0;
            case 2:
                return --this.medium >= 0;
            case 3:
                return --this.big >= 0;
        }

        throw new Error("Unsupported car type provided");
    }
}