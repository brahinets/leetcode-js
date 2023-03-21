export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let canMore: number = 0;
    let i: number = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 1) {
            i += 2;
            continue;
        }

        const prev: number = i - 1;
        const next: number = i + 1;
        const noLeftBlockers: boolean = prev < 0 || flowerbed[prev] === 0;
        const norRightBlockers: boolean = next >= flowerbed.length || flowerbed[next] === 0;

        if (noLeftBlockers && norRightBlockers) {
            i += 2;
            canMore++;
            continue;
        }

        i++;
    }

    return canMore >= n;
}