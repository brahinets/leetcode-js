export {ProductOfNumbers}

class ProductOfNumbers {
    private products: number[]

    constructor() {
        this.products = [1]
    }

    add(num: number): void {
        if (num === 0) {
            this.products = [1]
        } else {
            this.products.push(this.products[this.products.length - 1] * num)
        }
    }

    getProduct(k: number): number {
        if (k >= this.products.length) {
            return 0
        }

        return this.products[this.products.length - 1] / this.products[this.products.length - 1 - k]
    }
}
