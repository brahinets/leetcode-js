export {findKthBit}

function findKthBit(n: number, k: number): string {
    let result: string = "0"

    for (let i: number = 1; i < n; i++) {
        result = result + "1" + reverse(invert(result))
    }

    return result[k - 1]
}

function invert(s: string): string {
    let inverted: string = ""

    for (let i: number = 0; i < s.length; i++) {
        inverted += s[i] === "0" ? "1" : "0"
    }

    return inverted
}

function reverse(s1: string): string {
    let reversed = ""

    for (let i: number = s1.length - 1; i >= 0; i--) {
        reversed += s1[i]
    }

    return reversed
}
