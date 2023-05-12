export {mostPoints}

function mostPoints(questions: number[][]): number {
    const maxPointStartingFrom: number[] = new Array<number>(questions.length).fill(0);

    maxPointStartingFrom[questions.length - 1] = questions[questions.length - 1][0];
    for (let i: number = questions.length - 2; i >= 0; i--) {
        const points: number = questions[i][0];
        const skip: number = questions[i][1];

        maxPointStartingFrom[i] = points;
        if (skip + i + 1 < questions.length) {
            maxPointStartingFrom[i] += maxPointStartingFrom[skip + i + 1];
        }

        maxPointStartingFrom[i] = Math.max(maxPointStartingFrom[i], maxPointStartingFrom[i + 1]);
    }

    return maxPointStartingFrom[0];
}