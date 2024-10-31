import {matrixOfZeros} from "../../common/array-factories"

export {minimumTotalDistance}

function minimumTotalDistance(robot: number[], factory: number[][]): number {
    robot.sort((a: number, b: number): number => a - b)
    factory.sort((a: number[], b: number[]): number => a[0] - b[0])

    const dp: number[][] = matrixOfZeros(factory.length + 1, robot.length + 1)
    for (let i: number = 0; i < robot.length; i++) {
        dp[i][factory.length] = Infinity
    }

    for (let j: number = factory.length - 1; j >= 0; j--) {
        let prefix: number = 0
        const qq: [number, number][] = [[robot.length, 0]]

        for (let i: number = robot.length - 1; i >= 0; i--) {
            prefix += Math.abs(robot[i] - factory[j][0])

            if (qq[0][0] > i + factory[j][1]) {
                qq.shift()
            }

            while (qq.length && qq[qq.length - 1][1] >= dp[i][j + 1] - prefix) {
                qq.pop()
            }

            qq.push([i, dp[i][j + 1] - prefix])
            dp[i][j] = qq[0][1] + prefix
        }
    }

    return dp[0][0]
}
