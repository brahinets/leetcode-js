export {minimumDeleteSum}

function minimumDeleteSum(s1: string, s2: string): number {
    let sum: number = 0;

    if (!s1.length) {
        for (const c of s2) {
            sum += c.charCodeAt(0);
        }
        return sum;
    }

    if (!s2.length) {
        for (const c of s1) {
            sum += c.charCodeAt(0);
        }
        return sum;
    }

    const trimFirst: string = s1.slice(0, s1.length - 1);
    const trimSecond: string = s2.slice(0, s2.length - 1);

    if (s1[s1.length - 1] === s2[s2.length - 1]) {
        sum += minimumDeleteSum(trimFirst, trimSecond)
    } else {
        const trimFirstCost: number = s1[s1.length - 1].charCodeAt(0);
        const trimSecondCost: number = s2[s2.length - 1].charCodeAt(0);

        sum += Math.min(
            trimFirstCost + minimumDeleteSum(trimFirst, s2),
            trimSecondCost + minimumDeleteSum(s1, trimSecond),
            trimFirstCost + trimSecondCost + minimumDeleteSum(trimFirst, trimSecond)
        );
    }

    return sum;
}
