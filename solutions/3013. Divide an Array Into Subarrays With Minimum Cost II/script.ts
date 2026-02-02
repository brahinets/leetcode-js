export { minimumCost }

type ValueWithIndex = [number, number]

function minimumCost(nums: number[], k: number, dist: number): number {
    const n: number = nums.length
    const elementsToSelect: number = k - 1

    const smallestElements: ValueWithIndex[] = []
    const remainingElements: ValueWithIndex[] = []
    let smallestElementsSum: number = 0

    const initialWindowEnd: number = Math.min(1 + dist, n - 1)
    for (let i: number = 1; i <= initialWindowEnd; i++) {
        const element: ValueWithIndex = [nums[i], i]

        if (smallestElements.length < elementsToSelect) {
            insertIntoSortedArray(smallestElements, element)
            smallestElementsSum += element[0]
        } else if (element[0] < smallestElements[smallestElements.length - 1][0]) {
            const evictedElement: ValueWithIndex = smallestElements.pop()!

            smallestElementsSum -= evictedElement[0]
            insertIntoSortedArray(remainingElements, evictedElement)

            insertIntoSortedArray(smallestElements, element)
            smallestElementsSum += element[0]
        } else {
            insertIntoSortedArray(remainingElements, element)
        }
    }

    let minimumSubarrayCost: number = smallestElementsSum

    for (let windowRight: number = 2 + dist; windowRight < n; windowRight++) {
        const exitingIndex: number = windowRight - dist - 1
        const exitingValue: number = nums[exitingIndex]

        if (removeByOriginalIndex(smallestElements, exitingIndex)) {
            smallestElementsSum -= exitingValue

            if (remainingElements.length > 0) {
                const promotedElement: ValueWithIndex = remainingElements.shift()!

                insertIntoSortedArray(smallestElements, promotedElement)

                smallestElementsSum += promotedElement[0]
            }
        } else {
            removeByOriginalIndex(remainingElements, exitingIndex)
        }

        const enteringElement: ValueWithIndex = [nums[windowRight], windowRight]
        if (smallestElements.length < elementsToSelect) {
            insertIntoSortedArray(smallestElements, enteringElement)

            smallestElementsSum += enteringElement[0]
        } else if (enteringElement[0] < smallestElements[smallestElements.length - 1][0]) {
            const evictedElement: ValueWithIndex = smallestElements.pop()!

            smallestElementsSum -= evictedElement[0]

            insertIntoSortedArray(remainingElements, evictedElement)
            insertIntoSortedArray(smallestElements, enteringElement)

            smallestElementsSum += enteringElement[0]
        } else {
            insertIntoSortedArray(remainingElements, enteringElement)
        }

        if (smallestElements.length === elementsToSelect) {
            minimumSubarrayCost = Math.min(minimumSubarrayCost, smallestElementsSum)
        }
    }

    return nums[0] + minimumSubarrayCost
}

function insertIntoSortedArray(array: ValueWithIndex[], element: ValueWithIndex): void {
    let position: number = 0

    while (position < array.length && (array[position][0] < element[0] || (array[position][0] === element[0] && array[position][1] < element[1]))) {
        position++
    }

    array.splice(position, 0, element)
}

function removeByOriginalIndex(array: ValueWithIndex[], originalIndex: number): boolean {
    for (let i: number = 0; i < array.length; i++) {
        if (array[i][1] === originalIndex) {
            array.splice(i, 1)

            return true
        }
    }

    return false
}