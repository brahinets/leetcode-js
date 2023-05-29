export {ParkingSystem}


enum CarType {
    SmallCar = 1,
    MediumCar = 2,
    BigCar = 3
}

class ParkingSystem {

    private capacity: Map<CarType, number>;

    constructor(small: number, medium: number, big: number) {
        this.capacity = new Map<CarType, number>();
        this.capacity.set(CarType.SmallCar, small)
        this.capacity.set(CarType.MediumCar, medium)
        this.capacity.set(CarType.BigCar, big)
    }

    addCar(carType: number): boolean {
        const car: CarType = carType;

        const capacity:number | undefined = this.capacity.get(car);
        if(capacity !== undefined) {
            if(capacity === 0) {
                return false;
            }

            this.capacity.set(car, capacity - 1);
            return true;
        }

        throw new Error("Unsupported car type provided");
    }
}