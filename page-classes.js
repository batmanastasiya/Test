import {homepageUrl, loginPageUrl} from './page-url';

class PageClasses {
    constructor(homepageUrl) {
        let homepageUrl = url;
        let loginButton =
    }
    async open() {
        await browser.get(url);
    }
}

class LoginPage {
    constructor(loginPageUrl) {
        let loginPageUrl = url;
        let emailInput = element(by.model('form.email'));
        let passwordInput = element(by.model('form.password'));
    }
    async open() {
        await browser.get(url);
    }
}