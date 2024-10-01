import {arrayOfZeros} from "../../common/array-factories"

export {canArrange}

function canArrange(arr: number[], k: number): boolean {
    const mod: number[] = arrayOfZeros(k)

    for (let i: number = 0; i < arr.length; i++) {
        mod[(arr[i] % k + k) % k]++
    }

    if (mod[0] % 2 !== 0) {
        return false
    }

    for (let i: number = 1; i <= k / 2; i++) {
        if (mod[i] !== mod[k - i]) {
            return false
        }
    }

    return true
}
