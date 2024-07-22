export {sortPeople}

function sortPeople(names: string[], heights: number[]): string[] {
    return names
        .map((name: string, index: number) => new Person(name, heights[index]))
        .sort((a: Person, b: Person): number => {
            if (a.height !== b.height) {
                return b.height - a.height
            }

            return a.name.localeCompare(b.name)
        }).map((person: Person): string => person.name)
}

class Person {
    constructor(public name: string, public height: number) {
    }
}
