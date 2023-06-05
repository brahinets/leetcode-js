export {checkStraightLine}

function checkStraightLine(coordinates: number[][]): boolean {
    coordinates.sort((a: number[], b: number[]): number => a[0] - b[0]);

    for (let i: number = 1; i < coordinates.length; i++) {
        const [x0, y0] = coordinates[i - 1];
        const [x1, y1] = coordinates[i];

        if (x1 - x0 !== y1 - y0) {
            return false;
        }
    }

    return true;
}
