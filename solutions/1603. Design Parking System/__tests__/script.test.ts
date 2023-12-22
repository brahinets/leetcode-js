import {ParkingSystem} from "../script"

describe('1603. Design Parking System', (): void => {
    it('Test Valid', (): void => {
        const system: ParkingSystem = new ParkingSystem(1, 1, 0)
        let added: boolean

        added = system.addCar(1)
        expect(added).toBe(true)

        added = system.addCar(2)
        expect(added).toBe(true)

        added = system.addCar(3)
        expect(added).toBe(false)

        added = system.addCar(1)
        expect(added).toBe(false)
    })

    it('Test illegal car type', (): void => {
        const system: ParkingSystem = new ParkingSystem(1, 1, 0)

        expect(() => system.addCar(0))
            .toThrow("Unsupported car type provided")
    })
})
