import {braceExpansionII} from '../script'

describe('1096. Brace Expansion II', (): void => {
    it('concatenation of two groups with a nested group', (): void => {
        expect(braceExpansionII('{a,b}{c,{d,e}}'))
            .toEqual(['ac', 'ad', 'ae', 'bc', 'bd', 'be'])
    })

    it('union of groups producing duplicates', (): void => {
        expect(braceExpansionII('{{a,z},a{b,c},{ab,z}}'))
            .toEqual(['a', 'ab', 'ac', 'z'])
    })

    it('single letter without any braces', (): void => {
        expect(braceExpansionII('a'))
            .toEqual(['a'])
    })

    it('plain word without any braces', (): void => {
        expect(braceExpansionII('abcd'))
            .toEqual(['abcd'])
    })

    it('flat group of single letters', (): void => {
        expect(braceExpansionII('{a,b,c}'))
            .toEqual(['a', 'b', 'c'])
    })

    it('union of groups collapsing to unique letters', (): void => {
        expect(braceExpansionII('{{a,b},{b,c}}'))
            .toEqual(['a', 'b', 'c'])
    })

    it('cartesian product of two groups', (): void => {
        expect(braceExpansionII('{a,b}{c,d}'))
            .toEqual(['ac', 'ad', 'bc', 'bd'])
    })

    it('letters interleaved with several groups', (): void => {
        expect(braceExpansionII('a{b,c}{d,e}f{g,h}'))
            .toEqual(['abdfg', 'abdfh', 'abefg', 'abefh', 'acdfg', 'acdfh', 'acefg', 'acefh'])
    })

    it('group wrapping a single word', (): void => {
        expect(braceExpansionII('{abc}'))
            .toEqual(['abc'])
    })

    it('deeply nested groups on both sides of a union', (): void => {
        expect(braceExpansionII('{a,{b,{c,d}}}'))
            .toEqual(['a', 'b', 'c', 'd'])
    })

    it('multi letter words inside a group', (): void => {
        expect(braceExpansionII('{ab,cd}{ef,gh}'))
            .toEqual(['abef', 'abgh', 'cdef', 'cdgh'])
    })

    it('union distributed over a trailing suffix', (): void => {
        expect(braceExpansionII('{a,b}c{d,e}'))
            .toEqual(['acd', 'ace', 'bcd', 'bce'])
    })

    it('nested concatenation inside a union branch', (): void => {
        expect(braceExpansionII('{a{b,c},d}e'))
            .toEqual(['abe', 'ace', 'de'])
    })

    it('expression at the maximum allowed length', (): void => {
        expect(braceExpansionII('{a,b}{c,d}{e,f}{g,h}{i,j}{k,l}{m,n}{o,p}{q,r}{s,t}').length)
            .toBe(1024)
    })
})
