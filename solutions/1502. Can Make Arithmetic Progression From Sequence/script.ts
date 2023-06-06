export {canMakeArithmeticProgression}

function canMakeArithmeticProgression(arr: number[]): boolean {
    if (arr.length <= 2) {
        return true;
    }

    arr.sort((a: number, b: number): number => a - b);

    const step: number = arr[1] - arr[0];

    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== step) {
            return false;
        }
    }

    return true;
}
