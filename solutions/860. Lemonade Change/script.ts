export {lemonadeChange}

function lemonadeChange(bills: number[]): boolean {
    let five: number = 0
    let ten: number = 0

    for (const payment of bills) {
        switch (payment) {
            case 5:
                five++
                break;
            case 10:
                if (five === 0) {
                    return false
                }

                five--
                ten++
                break;
            case 20:
                if (ten > 0 && five > 0) {
                    ten--
                    five--
                } else if (five >= 3) {
                    five -= 3
                } else {
                    return false
                }
                break
        }
    }

    return true
}
