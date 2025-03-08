export {minimumRecolors}

function minimumRecolors(blocks: string, k: number): number {
    let left: number = 0
    let numWhites: number = 0
    let numRecolors: number = Infinity

    for (let right: number = 0; right < blocks.length; right++) {
        if (blocks.charAt(right) == 'W') {
            numWhites++
        }

        if (right - left + 1 == k) {
            numRecolors = Math.min(numRecolors, numWhites)

            if (blocks.charAt(left) == 'W') {
                numWhites--
            }

            left++
        }
    }

    return numRecolors
}
