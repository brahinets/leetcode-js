export {largestAltitude}

function largestAltitude(gains: number[]): number {
    let current: number = 0;
    let max: number = current;

    for (const gain of gains) {
        current += gain;
        if (current > max) {
            max = current;
        }
    }

    return max;
}
