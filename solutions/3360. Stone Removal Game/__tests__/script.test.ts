import { canAliceWin } from '../script'

describe('3360. Stone Removal Game', (): void => {
    it('pile too small for the first removal', (): void => {
        expect(canAliceWin(1)).toBe(false)
    })

    it('nine stones leaves alice unable to start', (): void => {
        expect(canAliceWin(9)).toBe(false)
    })

    it('barely enough stones for the first removal', (): void => {
        expect(canAliceWin(10)).toBe(true)
    })

    it('bob cannot follow the first removal', (): void => {
        expect(canAliceWin(12)).toBe(true)
    })

    it('alice runs out mid sequence after bob removes nine', (): void => {
        expect(canAliceWin(19)).toBe(false)
    })

    it('bob runs out mid sequence after alice removes eight', (): void => {
        expect(canAliceWin(27)).toBe(true)
    })

    it('alternating exhaustion throughout the game', (): void => {
        expect(canAliceWin(34)).toBe(false)
        expect(canAliceWin(40)).toBe(true)
        expect(canAliceWin(45)).toBe(false)
        expect(canAliceWin(49)).toBe(true)
        expect(canAliceWin(52)).toBe(false)
    })

    it('pile gone right before bob removes the last stone', (): void => {
        expect(canAliceWin(54)).toBe(true)
    })

    it('every removal happens and alice faces an empty requirement', (): void => {
        expect(canAliceWin(55)).toBe(false)
    })
})
