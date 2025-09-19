import {Spreadsheet} from '../script'

describe('3484. Design Spreadsheet', (): void => {
    it('Test', (): void => {
        const spreadsheet: Spreadsheet = new Spreadsheet(3)
        expect(spreadsheet.getValue("=5+7")).toEqual(12)

        spreadsheet.setCell("A1", 10)
        expect(spreadsheet.getValue("=A1+6")).toEqual(16)

        spreadsheet.setCell("B2", 15)
        expect(spreadsheet.getValue("=A1+B2")).toEqual(25)

        spreadsheet.resetCell("A1")
        expect(spreadsheet.getValue("=A1+B2")).toEqual(15)
    })
})
