export { decodeCiphertext }

function decodeCiphertext(encodedText: string, rows: number): string {
    const columns: number = encodedText.length / rows
    const characters: string[] = []

    for (let startColumn: number = 0; startColumn < columns; startColumn++) {
        for (let row: number = 0; row < rows; row++) {
            if (startColumn + row < columns) {
                characters.push(encodedText[row * columns + startColumn + row])
            }
        }
    }

    return characters.join('').trimEnd()
}
