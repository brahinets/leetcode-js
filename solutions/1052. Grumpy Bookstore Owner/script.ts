export {maxSatisfied}

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let totalCustomers: number = findMaxPossibleUnhappyCustomers(minutes, customers, grumpy)

    for (let i = 0; i < customers.length; i++) {
        totalCustomers += customers[i] * (1 - grumpy[i]);
    }

    return totalCustomers
}

function findMaxPossibleUnhappyCustomers(minutes: number, customers: number[], grumpy: number[]): number {
    let unhappyCustomers: number = 0
    for (let i = 0; i < minutes; i++) {
        unhappyCustomers += customers[i] * grumpy[i]
    }

    let maxUnhappyCustomers: number = unhappyCustomers
    for (let i = minutes; i < customers.length; i++) {
        unhappyCustomers += customers[i] * grumpy[i]
        unhappyCustomers -= customers[i - minutes] * grumpy[i - minutes]

        maxUnhappyCustomers = Math.max(maxUnhappyCustomers, unhappyCustomers)
    }

    return maxUnhappyCustomers
}
