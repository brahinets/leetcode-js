import {topKFrequent} from '../script'

describe('692. Top K Frequent Words', (): void => {
    it('Sort by counts', (): void => {
        expect(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
            .toStrictEqual(["i", "love"]);
    });
    it('Use lexicographical comparison when counts equal', (): void => {
        expect(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
            .toStrictEqual(["the", "is", "sunny", "day"]);
    });
})