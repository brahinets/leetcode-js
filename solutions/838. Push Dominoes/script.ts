export {pushDominoes}

function pushDominoes(dominoes: string): string {
    const positions: number[] = [-1]
    const forces: string[] = ['L']

    let len: number = 1

    for (let i: number = 0; i < dominoes.length; i++) {
        const c: string = dominoes[i]

        if (c !== '.') {
            positions[len] = i
            forces[len] = c
            len++
        }
    }

    positions[len] = dominoes.length
    forces[len] = 'R'
    len++

    const result: string[] = dominoes.split('')

    for (let k: number = 0; k < len - 1; k++) {
        const left: number = positions[k]
        const right: number = positions[k + 1]
        const leftForce: string = forces[k]
        const rightForce: string = forces[k + 1]

        if (leftForce === rightForce) {
            for (let i: number = left + 1; i < right; i++) {
                result[i] = leftForce
            }
        } else if (leftForce === 'R' && rightForce === 'L') {
            for (let i: number = left + 1; i < right; i++) {
                const distLeft: number = i - left
                const distRight: number = right - i

                result[i] = distLeft === distRight ? '.' : distLeft < distRight ? 'R' : 'L'
            }
        }
    }

    return result.join('')
}
