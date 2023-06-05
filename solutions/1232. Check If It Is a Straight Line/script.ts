export {checkStraightLine}

function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length <= 2) {
        return true;
    }

    coordinates.sort((a: number[], b: number[]): number => {
        const xDelta: number = a[0] - b[0];
        const yDelta: number = a[1] - b[1];
        return xDelta !== 0 ? xDelta : yDelta;
    });

    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];

    for (let i: number = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];

        if ((x - x0) * (y1 - y0) !== (y - y0) * (x1 - x0)) {
            return false;
        }
    }

    return true;
}
