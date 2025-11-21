import {restoreIpAddresses} from '../script'

describe('93. Restore IP Addresses', (): void => {
    it('Two', (): void => {
        expect(restoreIpAddresses("25525511135"))
            .toEqual(["255.255.11.135", "255.255.111.35"])
    })

    it('The only', (): void => {
        expect(restoreIpAddresses("0000"))
            .toEqual(["0.0.0.0"])
    })

    it('Many', (): void => {
        expect(restoreIpAddresses("101023"))
            .toEqual(["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"])
    })
})
