export {checkStraightLine}

function checkStraightLine(coordinates: number[][]): boolean {
    coordinates.sort((a: number[], b: number[]): number => {
        const xDelta: number = a[0] - b[0];
        const yDelta: number = a[1] - b[1];
        return xDelta !== 0 ? xDelta : yDelta;
    });

    for (let i: number = 2; i < coordinates.length; i++) {
        const [x0, y0] = coordinates[i - 2];
        const [x1, y1] = coordinates[i - 1];
        const [x2, y2] = coordinates[i];

        const sameAxis: boolean = (x2 === x1 && x1 === x0) || (y2 === y1 && y1 === y0);
        if (sameAxis) {
            continue;
        }

        if (y2 - y1 !== y1 - y0 || x2 - x1 !== x1 - x0) {
            return false;
        }
    }

    return true;
}
