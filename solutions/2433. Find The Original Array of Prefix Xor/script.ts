export {findArray}

function findArray(pref: number[]): number[] {
    const arr: number[] = [pref[0]]

    for (let i = 1; i < pref.length; i++) {
        arr[i] = pref[i] ^ pref[i - 1]
    }

    return arr
}
