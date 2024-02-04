class BrowserHistory {
    private history: string[]
    private position: number

    constructor(homepage: string) {
        this.history = [homepage]
        this.position = 0
    }

    visit(url: string): void {
        this.history = [...this.history.slice(0, this.position + 1), url]
        this.position = this.history.length - 1
    }

    back(steps: number): string {
        const minIndex: number = 0
        this.position = Math.max(minIndex, this.position - steps)
        return this.history[this.position]
    }

    forward(steps: number): string {
        const lastIndex: number = this.history.length - 1
        this.position = Math.min(lastIndex, this.position + steps)
        return this.history[this.position]
    }
}
