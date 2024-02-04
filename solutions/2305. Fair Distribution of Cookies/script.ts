import {arrayOf} from "../../common/array-factories"

export {distributeCookies}

function distributeCookies(cookies: number[], k: number): number {
    cookies = cookies.toSorted((a: number, b: number) => a - b)

    const idealCookiesPerChild: number = cookies.reduce((sum: number, cookie: number): number => sum + cookie, 0) / k
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
        .map((childCookies: number[]): number => childCookies.reduce((sum: number, cookie: number): number => sum + cookie, 0))
        .reduce((firstChild: number, secondChild: number): number => Math.max(firstChild, secondChild))
}

function findChildWithMinimumCookies(childrenCookies: number[][]): number {
    const childrenCookiesTotals: number[] = childrenCookies
        .map((cookies: number[]): number => cookies.reduce((sum: number, cookie: number): number => sum + cookie, 0))

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
