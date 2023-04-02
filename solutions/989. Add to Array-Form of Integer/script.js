/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let num2 = k.toString().split('').map(n => Number(n));

    let longer = num.length > num2.length ? num : num2;
    let shorter = num.length <= num2.length ? num : num2;
    longer = longer.reverse();
    shorter = shorter.reverse();

    let addNext = false;
    let result = [];
    for (let n in longer) {
        let item = addNext + longer[n] + (shorter[n] ?? 0);

        result.push(item % 10);

        addNext = item >= 10 ? 1 : 0;
    }

    if (addNext) {
        result.push(1);
    }

    return result.reverse();
};