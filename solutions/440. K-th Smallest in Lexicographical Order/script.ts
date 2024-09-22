import {lexicalOrder} from "../386. Lexicographical Numbers/script"

export {findKthNumber}

function findKthNumber(n: number, k: number): number {
    return lexicalOrder(n)[k - 1]
}
