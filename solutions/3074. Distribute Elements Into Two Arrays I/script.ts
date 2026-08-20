export {resultArray}

function resultArray(nums: number[]): number[] {
    const firstArray: number[] = [nums[0]]
    const secondArray: number[] = [nums[1]]

    for (let index: number = 2; index < nums.length; index++) {
        const currentNumber: number = nums[index]

        if (firstArray[firstArray.length - 1] > secondArray[secondArray.length - 1]) {
            firstArray.push(currentNumber)
        } else {
            secondArray.push(currentNumber)
        }
    }

    return [...firstArray, ...secondArray]
}
