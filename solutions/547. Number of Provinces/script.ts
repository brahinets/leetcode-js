export {findCircleNum}

const PROVINCE: number = 1;
const VISITED: number = 2;

function findCircleNum(isConnected: number[][]): number {
    const map: number[][] = JSON.parse(JSON.stringify(isConnected));

    let provincesCount: number = 0;
    let hasProvince: boolean;

    do {
        const [coordinateX, coordinateY]: number[] = findProvinceCoordinates(map);

        hasProvince = coordinateX !== -1 && coordinateY !== -1;
        if (hasProvince) {
            visitProvince(map, coordinateX, coordinateY);
            provincesCount++;
        }
    } while (hasProvince)

    return provincesCount;
}
function findProvinceCoordinates(map: number[][]): number[] {
    for (let i: number = 0; i < map.length; i++) {
        for (let j: number = 0; j < map[0].length; j++) {
            if (map[i][j] === PROVINCE) {
                return [i, j]
            }
        }
    }

    return [-1, -1];
}

function visitProvince(map: number[][], coordinateX: number, coordinateY: number): void {
    if (coordinateX < 0 || coordinateY < 0 || coordinateX >= map.length || coordinateY >= map[0].length) {
        return;
    }

    if (PROVINCE === map[coordinateX][coordinateY]) {
        map[coordinateX][coordinateY] = VISITED;

        visitProvince(map, coordinateX - 1, coordinateY);
        visitProvince(map, coordinateX, coordinateY - 1);
        visitProvince(map, coordinateX + 1, coordinateY);
        visitProvince(map, coordinateX, coordinateY + 1);
    }
}
