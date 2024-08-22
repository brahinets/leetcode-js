export {findComplement}

function findComplement(num: number): number {
    let bits: string[] = num.toString(2).split('')

    for (let i: number = 0; i < bits.length; i++) {
        if (bits[i] == '1') {
            bits[i] = '0'
        } else {
            bits[i] = '1'
        }
    }

    return parseInt(bits.join(''), 2)
}
