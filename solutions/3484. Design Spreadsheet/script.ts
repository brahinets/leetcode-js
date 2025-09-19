export {Spreadsheet}

class Spreadsheet {
    private readonly cells: Map<string, number>
    private readonly rows: number

    constructor(rows: number) {
        this.cells = new Map<string, number>()
        this.rows = rows
    }

    public setCell(cell: string, value: number): void {
        this.assertCellInBounds(cell)
        this.cells.set(cell, value)
    }

    public resetCell(cell: string): void {
        this.assertCellInBounds(cell)
        this.cells.delete(cell)
    }

    public getValue(formula: string): number {
        formula = formula.trim()

        if (formula.startsWith('=')) {
            return this.evaluateExpression(formula.slice(1))
        }

        if (this.cells.has(formula)) {
            this.assertCellInBounds(formula)
            return this.cells.get(formula) as number
        }

        return this.evaluateFormula(formula)
    }

    private assertCellInBounds(cell: string): void {
        const match: RegExpMatchArray | null = cell.match(/^([A-Z]+)(\d+)$/)

        if (!match) {
            throw new Error('Invalid cell name')
        }

        const row: number = parseInt(match[2], 10)
        if (row < 1 || row > this.rows) {
            throw new Error(`Row ${row} is out of bounds (1..${this.rows})`)
        }
    }

    private evaluateExpression(expr: string): number {
        expr = expr.replace(/[A-Z]+\d+/g, (cell: string): string => {
            this.assertCellInBounds(cell)

            if (this.cells.has(cell)) {
                return String(this.cells.get(cell))
            }

            try {
                return String(this.getValue(cell))
            } catch {
                return '0'
            }
        })

        if (!/^[-+*/()\d\s.]+$/.test(expr)) {
            throw new Error('Invalid expression')
        }

        return Math.floor(eval(expr))
    }

    private evaluateFormula(formula: string): number {
        if (formula.startsWith('SUM(') && formula.endsWith(')')) {
            const args: string = formula.slice(4, -1)
            const values: number[] = this.parseArgs(args)
            return values.reduce((a: number, b: number): number => a + b, 0)
        }

        if (formula.startsWith('AVG(') && formula.endsWith(')')) {
            const args: string = formula.slice(4, -1)
            const values: number[] = this.parseArgs(args)
            if (values.length === 0) {
                throw new Error('No cells to average')
            }
            return Math.floor(values.reduce((a: number, b: number): number => a + b, 0) / values.length)
        }

        if (formula.includes(':')) {
            const [start, end]: [string, string] = formula.split(':').map((s: string): string => s.trim()) as [string, string]
            const cells: string[] = this.expandRange(start, end)
            return cells.reduce((sum: number, cell: string): number => sum + (this.cells.get(cell) ?? 0), 0)
        }

        throw new Error('Cell not set')
    }

    private parseArgs(args: string): number[] {
        const parts: string[] = args.split(',').map((s: string): string => s.trim())
        const values: number[] = []

        for (const part of parts) {
            if (part.includes(':')) {
                const [start, end]: [string, string] = part.split(':').map((s: string): string => s.trim()) as [string, string]
                const cells: string[] = this.expandRange(start, end)
                for (const cell of cells) {
                    values.push(this.cells.get(cell) ?? 0)
                }
            } else if (this.cells.has(part)) {
                this.assertCellInBounds(part)
                values.push(this.cells.get(part) as number)
            } else {
                try {
                    values.push(this.getValue(part))
                } catch {
                    values.push(0)
                }
            }
        }

        return values
    }

    private expandRange(start: string, end: string): string[] {
        const [startCol, startRow]: [number, number] = this.parseCell(start)
        const [endCol, endRow]: [number, number] = this.parseCell(end)
        const cells: string[] = []

        for (let col: number = startCol; col <= endCol; col++) {
            for (let row: number = Math.max(1, startRow); row <= Math.min(this.rows, endRow); row++) {
                cells.push(this.cellName(col, row))
            }
        }

        return cells
    }

    private parseCell(cell: string): [number, number] {
        const match: RegExpMatchArray | null = cell.match(/^([A-Z]+)(\d+)$/)

        if (!match) {
            throw new Error('Invalid cell name')
        }

        const col: number = this.colToIndex(match[1])
        const row: number = parseInt(match[2], 10)
        if (row < 1 || row > this.rows) {
            throw new Error(`Row ${row} is out of bounds (1..${this.rows})`)
        }
        return [col, row]
    }

    private colToIndex(col: string): number {
        let idx: number = 0
        for (let i: number = 0; i < col.length; i++) {
            idx = idx * 26 + (col.charCodeAt(i) - 65 + 1)
        }
        return idx - 1
    }

    private cellName(col: number, row: number): string {
        let name: string = ''
        col++

        while (col > 0) {
            name = String.fromCharCode(65 + (col - 1) % 26) + name
            col = Math.floor((col - 1) / 26)
        }

        return name + row
    }
}
