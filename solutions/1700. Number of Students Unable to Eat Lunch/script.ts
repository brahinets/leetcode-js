export {countStudents}

function countStudents(students: number[], sandwiches: number[]): number {
    let feed: boolean

    do {
        feed = false

        for (let i: number = 0; i < students.length; i++) {
            const sandwich: number = sandwiches.shift()!
            const preference: number = students.shift()!

            if (sandwich === preference) {
                feed = true
                i--
            } else {
                sandwiches.unshift(sandwich)
                students.push(preference)
            }
        }
    } while (feed && sandwiches && students)

    return students.length
}
