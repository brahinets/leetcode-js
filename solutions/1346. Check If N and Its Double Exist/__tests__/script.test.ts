import {checkIfExist} from '../script'

describe('1346. Check If N and Its Double Exist', (): void => {
    it('Yes', (): void => {
        expect(checkIfExist([10, 2, 5, 3]))
            .toEqual(true)
    })

    it('No', (): void => {
        expect(checkIfExist([3, 1, 7, 11]))
            .toEqual(false)
    })
})
