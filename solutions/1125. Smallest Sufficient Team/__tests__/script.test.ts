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

    it('Very many skills', (): void => {
        expect(smallestSufficientTeam(
            ["cpp", "python", "javascript", "kotlin", "ruby", "r", "c", "rust", "vb"],
            [["cpp", "c", "rust"], ["cpp", "python", "javascript", "c", "r", "rust"], ["cpp", "python", "javascript", "c", "r", "vb"], ["cpp", "python", "javascript", "ruby", "kotlin", "r", "c", "rust", "vb"], ["cpp", "python", "javascript", "kotlin", "ruby", "r", "c", "rust", "vb"], ["python", "r"], ["cpp", "python", "javascript", "ruby", "kotlin", "r", "c", "rust", "vb"], ["cpp", "python", "javascript", "r", "c", "rust"], ["cpp", "javascript", "rust", "vb"], ["kotlin", "ruby", "c", "vb"], ["cpp", "python", "kotlin", "ruby", "rust", "vb"], ["ruby", "c", "r", "rust"], ["python", "javascript"], ["javascript", "ruby", "rust"], ["python", "javascript", "ruby", "c", "r", "rust", "vb"], ["cpp", "javascript", "kotlin", "r", "c", "vb"], ["c", "rust"], ["cpp", "kotlin", "ruby", "c", "r", "rust", "vb"], ["cpp", "python", "javascript", "ruby", "kotlin", "rust"], ["cpp", "javascript", "ruby"], ["vb"]]
        )).toStrictEqual([6]);
    });

});
