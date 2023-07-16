import {smallestSufficientTeam} from '../script'

describe('1125. Smallest Sufficient Team', (): void => {
    it('All of people', (): void => {
        expect(smallestSufficientTeam(
            ["java", "nodejs", "reactjs"],
            [["java"], ["nodejs", "reactjs"]]
        )).toStrictEqual([0, 1]);
    });

    it('Many of people', (): void => {
        expect(smallestSufficientTeam(
            ["java", "nodejs", "reactjs"],
            [["java"], ["nodejs"], ["nodejs", "reactjs"]]
        )).toStrictEqual([0, 2]);
    });

    it('Few of people', (): void => {
        expect(smallestSufficientTeam(
            ["algorithms", "math", "java", "reactjs", "csharp", "aws"],
            [["algorithms", "math", "java"], ["algorithms", "math", "reactjs"], ["java", "csharp", "aws"], ["reactjs", "csharp"], ["csharp", "math"], ["aws", "java"]]
        )).toStrictEqual([1, 2]);
    });

});
