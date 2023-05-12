import {arrayOfZeros} from '../../common/array-utils'

export {mostPoints}

function mostPoints(questions: number[][]): number {
    const maxPointStartingFrom: number[] = arrayOfZeros(questions.length);

    maxPointStartingFrom[questions.length - 1] = questions[questions.length - 1][0];
    for (let position: number = questions.length - 2; position >= 0; position--) {
        const points: number = questions[position][0];
        const jumpDistance: number = questions[position][1];

        const reachablePoint: number = jumpDistance + position + 1;
        const canReachPoint: boolean = reachablePoint < questions.length;
        if (canReachPoint) {
            maxPointStartingFrom[position] = points + maxPointStartingFrom[reachablePoint];
        } else {
            maxPointStartingFrom[position] = points;
        }

        maxPointStartingFrom[position] = Math.max(maxPointStartingFrom[position], maxPointStartingFrom[position + 1]);
    }

    return maxPointStartingFrom[0];
}