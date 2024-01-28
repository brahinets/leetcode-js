import {smallestSufficientTeam} from '../script'

describe('1125. Smallest Sufficient Team', (): void => {
    it('All of people', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["java", "nodejs", "reactjs"],
            [["java"], ["nodejs", "reactjs"]]
        ))).toStrictEqual(new Set<number>([0, 1]))
    })

    it('Many of people', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["java", "nodejs", "reactjs"],
            [["java"], ["nodejs"], ["nodejs", "reactjs"]]
        ))).toStrictEqual(new Set<number>([0, 2]))
    })

    it('Few of people', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["algorithms", "math", "java", "reactjs", "csharp", "aws"],
            [["algorithms", "math", "java"], ["algorithms", "math", "reactjs"], ["java", "csharp", "aws"], ["reactjs", "csharp"], ["csharp", "math"], ["aws", "java"]]
        ))).toStrictEqual(new Set<number>([1, 2]))
    })

    it('Very many skills', (): void => {
        expect(smallestSufficientTeam(
            ["cpp", "python", "javascript", "kotlin", "ruby", "r", "c", "rust", "vb"],
            [["cpp", "c", "rust"], ["cpp", "python", "javascript", "c", "r", "rust"], ["cpp", "python", "javascript", "c", "r", "vb"], ["cpp", "python", "javascript", "ruby", "kotlin", "r", "c", "rust", "vb"], ["cpp", "python", "javascript", "kotlin", "ruby", "r", "c", "rust", "vb"], ["python", "r"], ["cpp", "python", "javascript", "ruby", "kotlin", "r", "c", "rust", "vb"], ["cpp", "python", "javascript", "r", "c", "rust"], ["cpp", "javascript", "rust", "vb"], ["kotlin", "ruby", "c", "vb"], ["cpp", "python", "kotlin", "ruby", "rust", "vb"], ["ruby", "c", "r", "rust"], ["python", "javascript"], ["javascript", "ruby", "rust"], ["python", "javascript", "ruby", "c", "r", "rust", "vb"], ["cpp", "javascript", "kotlin", "r", "c", "vb"], ["c", "rust"], ["cpp", "kotlin", "ruby", "c", "r", "rust", "vb"], ["cpp", "python", "javascript", "ruby", "kotlin", "rust"], ["cpp", "javascript", "ruby"], ["vb"]]
        )).toStrictEqual([6])
    })

    it('Very many people', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["vgzp", "urfys", "nvkjkzxrfn", "pqznypwpcv", "bdfmsjlddbinqo", "xvgkyzqpmzwcxol", "twlau", "vybgxpyq", "edpuw", "w"],
            [["xvgkyzqpmzwcxol"], ["w"], ["urfys", "w"], ["urfys"], ["bdfmsjlddbinqo"], ["xvgkyzqpmzwcxol"], [], [], ["w"], ["vgzp", "w"], ["nvkjkzxrfn", "bdfmsjlddbinqo", "edpuw"], ["urfys"], ["bdfmsjlddbinqo", "xvgkyzqpmzwcxol", "twlau"], ["nvkjkzxrfn", "bdfmsjlddbinqo", "vybgxpyq"], ["vgzp", "edpuw"], ["urfys", "xvgkyzqpmzwcxol"], ["bdfmsjlddbinqo", "w"], ["nvkjkzxrfn", "bdfmsjlddbinqo", "w"], ["bdfmsjlddbinqo", "vybgxpyq"], ["urfys", "bdfmsjlddbinqo"], ["vgzp"], ["nvkjkzxrfn", "xvgkyzqpmzwcxol"], ["nvkjkzxrfn"], ["vgzp", "edpuw"], [], ["bdfmsjlddbinqo"], ["vgzp", "nvkjkzxrfn", "xvgkyzqpmzwcxol"], ["vgzp", "bdfmsjlddbinqo", "edpuw", "w"], ["xvgkyzqpmzwcxol", "vybgxpyq", "w"], ["pqznypwpcv", "vybgxpyq"], ["vybgxpyq"], ["twlau"], ["vgzp"], ["vgzp", "twlau", "edpuw"], ["nvkjkzxrfn", "bdfmsjlddbinqo"], ["bdfmsjlddbinqo"], ["vgzp"], ["urfys"], ["nvkjkzxrfn"], ["nvkjkzxrfn", "edpuw"], ["vgzp", "nvkjkzxrfn"], [], ["vgzp", "nvkjkzxrfn"], ["xvgkyzqpmzwcxol"], [], ["nvkjkzxrfn", "xvgkyzqpmzwcxol", "vybgxpyq"], ["vybgxpyq"], ["nvkjkzxrfn"], ["nvkjkzxrfn", "edpuw"], ["vgzp"]]
        ))).toStrictEqual(new Set<number>([33, 15, 17, 29]))
    })

    it('Very many people as well', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["ohmvnkxnokpnwxmr", "jdjdb", "azdwg", "xvn", "mljb", "rdaavykiextpr", "ztp"],
            [["azdwg"], ["ohmvnkxnokpnwxmr", "mljb"], ["jdjdb"], [], [], [], ["xvn", "mljb"], [], ["xvn"], [], ["xvn"], ["jdjdb", "mljb"], [], ["ohmvnkxnokpnwxmr", "mljb", "ztp"], ["ohmvnkxnokpnwxmr"], [], [], ["ohmvnkxnokpnwxmr", "jdjdb"], ["jdjdb"], [], [], [], ["azdwg", "mljb"], ["ztp"], ["xvn"], ["jdjdb"], ["mljb"], ["xvn"], ["rdaavykiextpr"], [], [], ["ohmvnkxnokpnwxmr", "jdjdb", "mljb", "rdaavykiextpr"], [], ["jdjdb", "mljb", "rdaavykiextpr", "ztp"], ["ohmvnkxnokpnwxmr"], ["rdaavykiextpr", "ztp"], ["mljb"], ["rdaavykiextpr"], [], ["azdwg"], [], ["rdaavykiextpr"], ["jdjdb"], [], ["mljb", "ztp"], [], ["rdaavykiextpr", "ztp"], ["jdjdb", "azdwg"], ["xvn", "ztp"], []]
        ))).toStrictEqual(new Set<number>([31, 47, 48]))
    })

    it('Very many people again', (): void => {
        expect(new Set<number>(smallestSufficientTeam(
            ["yvstvgspxy", "ohoawazvdz", "yvzuqettmru", "finmcneglinx", "daspbvnxn", "bzbipeubqgvtzl", "ufbsjdq", "wbtugbdzqcqpj", "qmucetzldtng", "elhzszjmeffcgtin"],
            [["yvstvgspxy", "yvzuqettmru", "daspbvnxn", "ufbsjdq"], ["finmcneglinx", "daspbvnxn", "bzbipeubqgvtzl", "elhzszjmeffcgtin"], ["elhzszjmeffcgtin"], [], ["bzbipeubqgvtzl"], ["bzbipeubqgvtzl", "qmucetzldtng"], ["elhzszjmeffcgtin"], ["ufbsjdq", "qmucetzldtng"], ["ufbsjdq"], ["bzbipeubqgvtzl"], ["ohoawazvdz", "finmcneglinx", "daspbvnxn", "bzbipeubqgvtzl"], ["daspbvnxn", "ufbsjdq", "elhzszjmeffcgtin"], ["yvstvgspxy", "daspbvnxn", "bzbipeubqgvtzl", "qmucetzldtng"], [], ["yvstvgspxy", "daspbvnxn"], ["bzbipeubqgvtzl", "ufbsjdq"], ["ufbsjdq"], ["finmcneglinx", "daspbvnxn", "wbtugbdzqcqpj", "qmucetzldtng", "elhzszjmeffcgtin"], ["daspbvnxn", "qmucetzldtng"], ["elhzszjmeffcgtin"], [], ["yvstvgspxy", "bzbipeubqgvtzl", "wbtugbdzqcqpj"], [], ["yvstvgspxy", "bzbipeubqgvtzl", "qmucetzldtng"], [], ["yvstvgspxy", "bzbipeubqgvtzl"], ["bzbipeubqgvtzl"], ["finmcneglinx", "daspbvnxn", "bzbipeubqgvtzl", "qmucetzldtng"], ["yvstvgspxy", "finmcneglinx", "daspbvnxn", "wbtugbdzqcqpj", "qmucetzldtng"], [], ["finmcneglinx"], ["daspbvnxn", "elhzszjmeffcgtin"], ["daspbvnxn", "elhzszjmeffcgtin"], ["ufbsjdq", "qmucetzldtng"], ["finmcneglinx", "daspbvnxn", "qmucetzldtng"], ["ufbsjdq"], ["yvzuqettmru", "qmucetzldtng"], ["qmucetzldtng"], ["qmucetzldtng"], ["bzbipeubqgvtzl", "ufbsjdq"]]
        ))).toStrictEqual(new Set<number>([0, 10, 17]))
    })
})
