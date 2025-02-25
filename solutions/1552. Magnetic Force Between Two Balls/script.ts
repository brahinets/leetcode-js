import {last} from "../../common/array-utils";

export {maxDistance}

function maxDistance(position: number[], m: number): number {
    position.sort((a: number, b: number): number => a - b)

    let answer: number = 0
    let left: number = 1
    let right: number = Math.floor(last(position)! / (m - 1))

    while (left <= right) {
        const mid: number = Math.floor(left + (right - left) / 2)

        if (canPlaceBalls(mid, position, m) === m) {
            answer = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return answer
}

function canPlaceBalls(gap: number, position: number[], balls: number): number {
    let prevBallPosition: number = position[0]
    let ballsPlaced: number = 1

    for (let i: number = 1; i < position.length && ballsPlaced < balls; i++) {
        let currPosition: number = position[i]

        if (currPosition - prevBallPosition >= gap) {
            ballsPlaced++
            prevBallPosition = currPosition
        }
    }

    return ballsPlaced
}

