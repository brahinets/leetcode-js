export {UndergroundSystem}

class UndergroundSystem {
    private trips: Map<number, Trip[]>;

    constructor() {
        this.trips = new Map<number, Trip[]>();
    }

    checkIn(id: number, stationName: string, t: number): void {
        const trips: Trip[] = this.trips.get(id) ?? [];

        for (const trip of trips) {
            if (!trip.end) {
                throw new Error("Client in already commuting");
            }
        }

        trips.push(new Trip(stationName, t))
        this.trips.set(id, trips);
    }

    checkOut(id: number, stationName: string, t: number): void {
        const trips: Trip[] = this.trips.get(id) ?? [];

        for (const trip of trips) {
            if (!(trip.end !== undefined && trip.endAt !== undefined)) {
                trip.end = stationName;
                trip.endAt = t;
                return;
            }
        }

        throw new Error("Client is not commuting");
    }

    getAverageTime(startStation: string, endStation: string): number {
        let totalDuration:number = 0;
        let totalCount:number = 0;

        for (const clientTrips of this.trips.values()) {
            for (const trip of clientTrips) {
                if (trip.end && trip.endAt && trip.start === startStation && trip.end === endStation) {
                    totalDuration += (trip.endAt - trip.startAt);
                    totalCount++;
                }
            }
        }

        return totalDuration / totalCount;
    }
}

class Trip {
    readonly start: string;
    readonly startAt: number;
    end?: string;
    endAt?: number;

    constructor(start: string, startAt: number) {
        this.start = start;
        this.startAt = startAt;
    }
}