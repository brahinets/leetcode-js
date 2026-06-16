export { processString };

function processString(s: string): string {
    let result: string = "";

    for (const character of s) {
        if (character === "*") {
            result = result.slice(0, -1);
        } else if (character === "#") {
            result = result + result;
        } else if (character === "%") {
            result = result.split("").reverse().join("");
        } else {
            result = result + character;
        }
    }

    return result;
}
