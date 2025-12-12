import {arrayOfZeros} from "../../common/array-factories"

export {countMentions}

function countMentions(numberOfUsers: number, events: string[][]): number[] {
    events.sort((a: string[], b: string[]): number => {
        const timeA: number = Number.parseInt(a[1])
        const timeB: number = Number.parseInt(b[1])

        if (timeA !== timeB) {
            return timeA - timeB
        }

        return (b[0] === "MESSAGE" ? 0 : 1) - (a[0] === "MESSAGE" ? 0 : 1)
    })

    const count: number[] = arrayOfZeros(numberOfUsers)
    const nextOnlineTime: number[] = arrayOfZeros(numberOfUsers)

    for (const event of events) {
        const curTime: number = Number.parseInt(event[1])
        const type: string = event[0]

        if (type === "MESSAGE") {
            const target: string = event[2]
            if (target === "ALL") {
                for (let i: number = 0; i < numberOfUsers; i++) {
                    count[i]++
                }
            } else if (target === "HERE") {
                for (let i: number = 0; i < numberOfUsers; i++) {
                    if (nextOnlineTime[i] <= curTime) {
                        count[i]++
                    }
                }
            } else {
                const users: string[] = target.split(" ")

                for (const user of users) {
                    const idx: number = Number.parseInt(user.substring(2))
                    count[idx]++
                }
            }
        } else {
            const idx: number = Number.parseInt(event[2])

            nextOnlineTime[idx] = curTime + 60
        }
    }

    return count
}
