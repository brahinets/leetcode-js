export {checkStraightLine}

function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length <= 2) {
        return true;
    }

    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const angleY: number = y1 - y0;
    const angleX: number = x1 - x0;

    for (let i: number = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((x - x0) * angleY !== (y - y0) * angleX) {
            return false;
        }
    }

    return true;
}
