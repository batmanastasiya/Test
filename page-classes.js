import {homepageUrl, loginPageUrl} from "./page-url";
import {loginButton} from "./selectors"

export class Homepage {
    constructor(homepageUrl, loginButton) {
        let homepageUrl = homepageUrl;
        let loginButton = loginButton;
    }
    async open() {
        await browser.get(homepageUrl);
    }
    async clickLoginButton() {
        await loginButton.click();
    }
}

export const homepage = new Homepage(homepageUrl, loginButton);

export class LoginPage {
    constructor(loginPageUrl) {
        let loginPageUrl = loginPageUrl;
        let emailInput = element(by.model('form.email'));
        let passwordInput = element(by.model('form.password'));
    }
    async open() {
        await browser.get(loginPageUrl);
    }
}