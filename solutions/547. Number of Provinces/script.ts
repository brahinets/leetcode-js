export {findCircleNum}

const PROVINCE: number = 1;
const VISITED: number = 2;

function findCircleNum(isConnected: number[][]): number {
    const map: number[][] = JSON.parse(JSON.stringify(isConnected));

    let provincesCount: number = 0;
    let hasProvince: boolean;

    do {
        const id: number = findProvinceCoordinates(map);

        hasProvince = id !== -1;
        if (hasProvince) {
            gatherNeighbors(map, id);
            provincesCount++;
        }
    } while (hasProvince)

    return provincesCount;
}

function findProvinceCoordinates(map: number[][]): number {
    for (let i: number = 0; i < map.length; i++) {
        if (map[i][i] === PROVINCE) {
            return i;
        }
    }

    return -1;
}

function gatherNeighbors(map: number[][], provinceId: number): void {
    const neighbours: number[] = map[provinceId];
    map[provinceId][provinceId] = VISITED;

    for (let neighbourId:number = 0; neighbourId < neighbours.length; neighbourId++) {
        if(map[provinceId][neighbourId] === PROVINCE) {
            map[provinceId][neighbourId] = VISITED;

            if (neighbourId !== provinceId) {
                gatherNeighbors(map, neighbourId);
            }
        }
    }
}
