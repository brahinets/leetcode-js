export {Bank}

class Bank {
    private readonly balances: number[]

    constructor(initialBalances: number[]) {
        this.balances = initialBalances
    }

    private isValid(account: number): boolean {
        return account >= 1 && account <= this.balances.length
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (!this.isValid(account1) || !this.isValid(account2)) {
            return false
        }

        const idx1: number = account1 - 1
        const idx2: number = account2 - 1
        if (this.balances[idx1] < money) {
            return false
        }

        this.balances[idx1] -= money
        this.balances[idx2] += money

        return true
    }

    deposit(account: number, money: number): boolean {
        if (!this.isValid(account)) {
            return false
        }

        const idx: number = account - 1
        this.balances[idx] += money

        return true
    }

    withdraw(account: number, money: number): boolean {
        if (!this.isValid(account)) {
            return false
        }

        const idx: number = account - 1
        if (this.balances[idx] < money) {
            return false
        }

        this.balances[idx] -= money

        return true
    }
}
