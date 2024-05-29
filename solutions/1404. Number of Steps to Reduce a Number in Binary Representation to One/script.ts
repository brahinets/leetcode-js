export {numSteps}

function numSteps(s: string): number {
    let steps: number = 0
    while (s.length > 1) {
        steps++

        if (s[s.length - 1] === '1') {
            s = addOne(s)
        } else {
            s = s.slice(0, s.length - 1)
        }
    }

    return steps
}

function addOne(s: string): string {
    let chars = s.split('')
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

    return chars.join('')
}
