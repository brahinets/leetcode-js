export {numSteps}

function numSteps(s: string): number {
    let bits: string[] = s.split("")

    let steps: number = 0
    while (bits.length > 1) {
        steps++

        if (bits[bits.length - 1] === '1') {
            bits = addOne(bits)
        } else {
            bits = bits.slice(0, bits.length - 1)
        }
    }

    return steps
}

function addOne(chars: string[]): string[] {
    let i = chars.length - 1

    while (i >= 0 && chars[i] !== '0') {
        chars[i] = '0'
        i--
    }

    if (i < 0) {
        chars.unshift('1')
    } else {
        chars[i] = '1'
    }

    return chars
}
