export { Robot }

class Robot {
    private readonly perimeter: Array<{ pos: [number, number]; dir: string }>
    private index: number
    private hasStarted: boolean

    constructor(width: number, height: number) {
        this.perimeter = []
        this.index = 0
        this.hasStarted = false

        for (let y = 0; y < height; y++) {
            this.perimeter.push({ pos: [0, y], dir: 'North' })
        }
        for (let x = 1; x < width; x++) {
            this.perimeter.push({ pos: [x, height - 1], dir: 'East' })
        }
        for (let y = height - 2; y >= 0; y--) {
            this.perimeter.push({ pos: [width - 1, y], dir: 'South' })
        }
        for (let x = width - 2; x >= 1; x--) {
            this.perimeter.push({ pos: [x, 0], dir: 'West' })
        }
    }

    step(num: number): void {
        this.hasStarted = true
        this.index = (this.index + num) % this.perimeter.length
    }

    getPos(): [number, number] {
        return this.perimeter[this.index].pos
    }

    getDir(): string {
        if (!this.hasStarted) return 'South'
        return this.perimeter[this.index].dir
    }
}
