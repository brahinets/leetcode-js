export {countRoutes}

const mod: number = 1e9 + 7;

function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    const routes: number[][] = routesOnFuel(locations.length, fuel, finish);

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

function routesOnFuel(citiesCount: number, fuel: number, finish: number): number[][] {
    const routes: number[][] = [];

    for (let start: number = 0; start < citiesCount; start++) {
        const minPossibleRoutes: number = start === finish ? 1 : 0;

        routes[start] = new Array(fuel + 1).fill(minPossibleRoutes);
    }

    return routes;
}
