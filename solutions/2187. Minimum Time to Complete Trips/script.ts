const minimumTime = (time: number[], totalTrips: number): number => {
    let left: number = 1;
    let right: number = totalTrips * time
        .reduce((prev: number, curr: number) => prev > curr ? prev : curr, time[0]);

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        const tripsForTime = time.map(e => Math.floor(mid / e))
            .reduce((s, e) => s + e, 0);
        if (tripsForTime >= totalTrips) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
