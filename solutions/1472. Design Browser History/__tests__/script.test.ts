import {BrowserHistory} from '../script'

describe('1472. Design Browser History', (): void => {

    it('Test', (): void => {
        const browserHistory: BrowserHistory = new BrowserHistory("leetcode.com")
        browserHistory.visit("google.com")
        browserHistory.visit("facebook.com")
        browserHistory.visit("youtube.com")
        expect(browserHistory.back(1)).toBe("facebook.com")
        expect(browserHistory.back(1)).toBe("google.com")
        expect(browserHistory.forward(1)).toBe("facebook.com")
        browserHistory.visit("linkedin.com")
        expect(browserHistory.forward(2)).toBe("linkedin.com")
        expect(browserHistory.back(2)).toBe("google.com")
        expect(browserHistory.back(7)).toBe("leetcode.com")
    })
})
