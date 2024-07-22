export {sortPeople}

function sortPeople(names: string[], heights: number[]): string[] {
    const people: [string, number][] = names.map((name: string, index: number) => [name, heights[index]])

    people.sort(([firstName, firstHeight]: [string, number], [secondName, secondHeight]: [string, number]) => {
        if (firstHeight === secondHeight) {
            return firstName.localeCompare(secondName)
        }

        return secondHeight - firstHeight
    })

    return people.map((person: [string, number]) => person[0])
}
