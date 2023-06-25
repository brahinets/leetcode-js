import {matrixOf} from "../../common/array-utils";

export {countRoutes}

const mod: number = 1e9 + 7;

function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    const routes: number[][] = matrixOf(0, locations.length, fuel + 1);
    routes[finish].fill(1)

    for (let f: number = 0; f <= fuel; f++) {
        for (let from: number = 0; from < locations.length; from++) {
            for (let to: number = 0; to < locations.length; to++) {
                if (from === to) {
                    continue;
                }

                const cost: number = Math.abs(locations[to] - locations[from]);
                if (cost <= f) {
                    routes[from][f] = (routes[from][f] + routes[to][f - cost]) % mod;
                }
            }
        }
    }

    return routes[start][fuel];
}
