export {removeSubfolders}

function removeSubfolders(folder: string[]): string[] {
    folder.sort()

    let previous: string = folder[0]
    const result: string[] = [previous]

    for (let i: number = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(previous + '/')) {
            result.push(folder[i])
            previous = folder[i]
        }
    }

    return result
}
