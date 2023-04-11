export {garbageCollection}

const GARBAGE_TYPES: string[] = ["G", "P", "M"];

function calculateTravelCost(travelCosts: number[], houseNumber: number): number {
    if (houseNumber > travelCosts.length + 1) {
        throw new Error("Travel cost is not specified for this house");
    }

    let cost: number = 0;

    for (let i: number = 1; i <= houseNumber; i++) {
        cost += travelCosts[i - 1];
    }

    return cost;
}

function removeChar(string: string, garbageType: string): string {
    const index: number = string.indexOf(garbageType);
    if (index === -1) {
        return string;
    }

    return string.substring(0, index) + string.substring(index + 1);
}

function garbageCollection(garbage: string[], travel: number[]): number {
    let sum: number = 0;

    for (const garbageType of GARBAGE_TYPES) {
        let maxVisitedHouse: number = 0;
        for (let i: number = 0; i < garbage.length; i++) {
            while (garbage[i].includes(garbageType)) {
                garbage[i] = removeChar(garbage[i], garbageType);
                sum += 1;
                maxVisitedHouse = i;
            }
        }

        sum += calculateTravelCost(travel, maxVisitedHouse);
    }

    return sum;
}