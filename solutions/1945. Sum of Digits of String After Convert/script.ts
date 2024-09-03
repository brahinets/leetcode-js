export {getLucky}

function getLucky(s: string, k: number): number {
    let codes: string = s.split('')
        .map(c => (c.charCodeAt(0) - 96).toString())
        .join('')

    for (let i = 0; i < k; i++) {
        codes = codes.split('').map(Number).reduce((digits, char) => digits + char, 0).toString()
    }

    return Number(codes)
}
