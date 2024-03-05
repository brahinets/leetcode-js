export {minimumLength}

function minimumLength(s: string): number {
    let start:number = 0
    let end:number = s.length - 1

    while (start < end) {
        if(s[start] !== s[end]) {
            break
        }

        const ch:string = s[start]
        while (s[start] === ch) {
            start++
        }
        while (s[end] === ch) {
            end--
        }
    }

    return Math.max(0, end - start + 1)
}
