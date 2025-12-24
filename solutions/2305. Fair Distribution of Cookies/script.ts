import {arrayOf} from "../../common/array-factories"
import {sum} from "../../common/array-utils"

export {distributeCookies}

function distributeCookies(cookies: number[], k: number): number {
    cookies = cookies.sort((a: number, b: number) => a - b)

    const idealCookiesPerChild: number = sum(cookies) / k
    const children: number[][] = arrayOf([], k)

    let childId: number = 0
    while (childId < k && cookies.length > 0) {
        let childCookiesTotal: number = 0
        let cookieId: number = cookies.length - 1

        while (cookieId >= 0) {
            const cookie: number = cookies[cookieId]
            if (cookie + childCookiesTotal <= idealCookiesPerChild) {
                childCookiesTotal += cookie
                children[childId].push(cookie)
                cookies.splice(cookieId, 1)
            }
            cookieId--
        }

        childId++
    }

    while (cookies.length > 0) {
        const biggestAvailableCookie: number = cookies.pop() ?? 0
        children[findChildWithMinimumCookies(children)].push(biggestAvailableCookie)
    }


    return children
        .map((childCookies: number[]): number => sum(childCookies))
        .reduce((firstChild: number, secondChild: number): number => Math.max(firstChild, secondChild))
}

function findChildWithMinimumCookies(childrenCookies: number[][]): number {
    const childrenCookiesTotals: number[] = childrenCookies
        .map((cookies: number[]): number => sum(cookies))

    let minIndex: number = 0
    let min: number = childrenCookiesTotals[0]

    for (let i: number = 0; i < childrenCookiesTotals.length; i++) {
        if (childrenCookiesTotals[i] < min) {
            min = childrenCookiesTotals[i]
            minIndex = i
        }
    }

    return minIndex
}
