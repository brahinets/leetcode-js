export {checkStraightLine}

function checkStraightLine(coordinates: number[][]): boolean {
    coordinates.sort((a: number[], b: number[]): number => a[0] - b[0]);

    for (let i: number = 1; i < coordinates.length; i++) {
        if (coordinates[i][0] - coordinates[i - 1][0] !== coordinates[i][1] - coordinates[i - 1][1]) {
            return false;
        }
    }

    return true;
}
