export {solution}

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * }
 */
function solution(isBadVersion: (version: number) => boolean): (n: number) => number {
    return function (n: number): number {
        let left: number = 0
        let right: number = n

        while (left < right) {
            const mid: number = Math.floor((left + right) / 2)

            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return right
    }
}
