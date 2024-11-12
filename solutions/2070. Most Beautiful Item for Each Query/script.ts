export {maximumBeauty}

function maximumBeauty(items: number[][], queries: number[]): number[] {
    const result: number[] = []

    for (let i: number = 0; i < queries.length; i++) {
        let maxBeauty: number = 0
        for (const item of items) {
            if (item[0] <= queries[i] && queries[i] <= item[1]) {
                maxBeauty = Math.max(maxBeauty, item[1])
            }
        }

        result.push(maxBeauty)
    }

    return result
}
