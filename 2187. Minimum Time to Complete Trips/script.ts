const minimumTime = (time: number[], totalTrips: number): number => {
    let enough: boolean = false;
    let count: number = 0;

    while (!enough) {
        count++;
        let tripsForTime = time.map(e => Math.floor(count / e))
            .reduce((s, e) => s + e, 0);
        enough = tripsForTime >= totalTrips;
    }

    return count;
};