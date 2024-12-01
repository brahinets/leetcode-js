export {checkIfExist}

function checkIfExist(arr: number[]): boolean {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] * 2) && arr.indexOf(arr[i] * 2) !== i) {
            return true
        }
    }

    return false
}
