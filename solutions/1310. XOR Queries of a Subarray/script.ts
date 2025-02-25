import {last} from "../../common/array-utils"

export {xorQueries}

function xorQueries(arr: number[], queries: number[][]): number[] {
    const prefixXor = [0]

    for (let i: number = 0; i < arr.length; i++) {
        prefixXor.push(last(prefixXor)! ^ arr[i])
    }

    return queries.map(([start, end]) => prefixXor[start] ^ prefixXor[end + 1])
}
