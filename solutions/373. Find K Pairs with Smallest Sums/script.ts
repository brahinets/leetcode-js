export {kSmallestPairs}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const topPairs: PriorityHeap = new PriorityHeap(k);

    for (let i: number = 0; i < nums1.length; i++) {
        for (let j: number = 0; j < nums2.length; j++) {
            topPairs.add(nums1[i], nums2[j])
        }
    }

    return topPairs.data;
}

class PriorityHeap {
    data: number[][];
    limit: number;

    constructor(limit: number) {
        this.data = [];
        this.limit = limit;
    }

    add(p1: number, p2: number): void {
        if (this.data.length < this.limit) {
            this.data.push([p1, p2]);
        } else {
            let max: number = this.data[0][0] + this.data[0][1];
            let maxIndex: number = 0;
            for (let i: number = 1; i < this.data.length; i++) {
                const pairSum: number = this.data[i][0] + this.data[i][1];
                if (pairSum > max) {
                    max = pairSum;
                    maxIndex = i;
                }
            }

            if (p1 + p2 < max) {
                this.data[maxIndex] = [p1, p2];
            }
        }
    }
}
