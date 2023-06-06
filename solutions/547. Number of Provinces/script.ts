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
            gatherProvince(map, id);
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

function gatherProvince(map: number[][], cityId: number): number[] {
    const province: number[] = [cityId];
    map[cityId][cityId] = VISITED;

    const neighbours: number[] = map[cityId];
    for (let neighbourId:number = 0; neighbourId < neighbours.length; neighbourId++) {
        if(map[cityId][neighbourId] === PROVINCE) {
            map[cityId][neighbourId] = VISITED;
            province.push(neighbourId);

            if (neighbourId !== cityId) {
                province.push(...gatherProvince(map, neighbourId));
            }
        }
    }

    return province;
}
