export {peakIndexInMountainArray}

function peakIndexInMountainArray(arr: number[]): number {
    if(arr.length < 3) {
        throw new Error("Input must contain at least three elements");
    }

    let max: number = arr[0];
    let maxIndex: number = 0;

    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}
