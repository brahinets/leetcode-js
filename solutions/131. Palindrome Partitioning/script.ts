import {isPalindrome} from '../../common/string-utils'

export {partition}

function partition(s: string): string[][] {
    return track(s, 0, [])
}

function track(str: string, start: number, results: string[]): string[][] {
    let result: string[][] = []

    if (start === str.length) {
        result.push([...results])
        return result
    }

    for (let end = start + 1; end <= str.length; end++) {
        const sub: string = str.slice(start, end)

        if (isPalindrome(sub)) {
            results.push(sub)
            result = result.concat(track(str, end, results))
            results.pop()
        }
    }

    return result
}

