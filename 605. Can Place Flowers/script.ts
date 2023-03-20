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
        const onLeftBoundary: boolean = prev < 0 && flowerbed[next] === 0;
        const onRightBoundary: boolean = next > flowerbed.length - 1 && flowerbed[prev] === 0;
        const inTheMiddle: boolean = flowerbed[prev] === 0 && flowerbed[next] === 0 || prev < 0 && next > flowerbed.length - 1;

        if (onLeftBoundary || onRightBoundary || inTheMiddle) {
            flowerbed[i] = 1;
            canMore++;
        }

        i++;
    }

    return canMore >= n;
}