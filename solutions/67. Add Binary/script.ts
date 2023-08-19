export {addBinary}

function addBinary(a: string, b: string): string {
    if (a.length > b.length) {
        b = b.padStart(a.length, '0');
    } else {
        a = a.padStart(b.length, '0');
    }

    const aBits: string[] = a.split('');
    const bBits: string[] = b.split('');

    let carry: number = 0;
    const res: number[] = [];
    for (let i: number = a.length - 1; i >= 0; i--) {
        const aBit: number = Number(aBits[i]);
        const bBit: number = Number(bBits[i]);
        const sum: number = (carry ? 1 : 0) + aBit + bBit;

        res.push(sum % 2);

        carry = sum > 1 ? 1 : 0;
    }

    if (carry) {
        res.push(1);
    }

    return res.reverse().join("");
}
