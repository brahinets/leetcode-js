export {canReach}

function canReach(source: string, minJump: number, maxJump: number): boolean {
    const length: number = source.length

    if (source[length - 1] === '1') {
        return false
    }

    const queue: number[] = [0]
    let farthest: number = 0

    for (let head: number = 0; head < queue.length; head++) {
        const position: number = queue[head]
        const rangeStart: number = Math.max(position + minJump, farthest + 1)
        const rangeEnd: number = Math.min(position + maxJump, length - 1)

        for (let next: number = rangeStart; next <= rangeEnd; next++) {
            if (source[next] === '0') {
                if (next === length - 1) {
                    return true
                }

                queue.push(next)
            }
        }

        farthest = Math.max(farthest, rangeEnd)
    }

    return length === 1
}
