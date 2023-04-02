export {decodeString}

function decodeString(s: string): string {
    let result: string = "";

    let chars: string[] = s.split("");
    let char;
    let multiplier: string = "";

    while (char = chars.shift()) {
        if (isDigit(char)) {
            multiplier += char;
        } else if (char === "[") {
            let block: string = "";
            let blocks: string[] = [char];
            while (char = chars.shift()) {
                if (char === "[") {
                    block += char;
                    blocks.push(char);
                } else if (char === "]") {
                    block += char;
                    blocks.pop();
                } else {
                    block += char;
                }

                if (blocks.length === 0) {
                    block = block.slice(0, block.length - 1);
                    break;
                }
            }

            result += decodeString(block).repeat(Number(multiplier));
            multiplier = "";
        } else {
            result += char;
            multiplier = "";
        }
    }

    return result;
}

function isDigit(str: string): boolean {
    return /^\d+$/.test(str);
}
