export {validateCoupons}

type Coupon = {
    code: string
    businessLine: string
}

const ALLOWED_CATEGORIES: Set<string> = new Set<string>(['electronics', 'grocery', 'pharmacy', 'restaurant'])
const CATEGORY_ORDER: Record<string, number> = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3
}

function validateCoupons(
    code: string[],
    businessLine: string[],
    isActive: boolean[]
): string[] {
    const valid: Coupon[] = []
    for (let i: number = 0; i < code.length; i++) {
        if (ALLOWED_CATEGORIES.has(businessLine[i]) && isActive[i] && isValidCode(code[i])) {
            valid.push({code: code[i], businessLine: businessLine[i]})
        }
    }

    valid.sort((a: Coupon, b: Coupon): number => {
        const catDiff: number = CATEGORY_ORDER[a.businessLine] - CATEGORY_ORDER[b.businessLine]

        if (catDiff !== 0) {
            return catDiff
        }

        return a.code.localeCompare(b.code)
    })

    return valid.map((v: Coupon): string => v.code)
}

function isValidCode(code: string): boolean {
    return code.length > 0 && /^[a-zA-Z0-9_]+$/.test(code)
}
