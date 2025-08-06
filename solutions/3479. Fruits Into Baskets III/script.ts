export {numOfUnplacedFruits}

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const blockSize: number = Math.ceil(Math.sqrt(baskets.length))
    const blocks: number[][] = []
    const blockMax: number[] = []

    for (let i: number = 0; i < baskets.length; i += blockSize) {
        const block: number[] = baskets.slice(i, i + blockSize)
        blocks.push(block)
        blockMax.push(Math.max(...block))
    }

    let count: number = 0

    for (const fruit of fruits) {
        let placed: boolean = false

        for (let b: number = 0; b < blocks.length; b++) {
            if (blockMax[b] < fruit) {
                continue
            }

            for (let j: number = 0; j < blocks[b].length; j++) {
                if (blocks[b][j] >= fruit) {
                    blocks[b][j] = 0

                    blockMax[b] = Math.max(...blocks[b])

                    placed = true

                    break
                }
            }

            if (placed) {
                break
            }
        }

        if (!placed) {
            count++
        }
    }

    return count
}
