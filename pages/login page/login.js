import {by, element} from "protractor";

export class LoginPage {
    constructor() {
        this.loginPageContent = element(by.css('.authorization-content'));
    }

    async enterEmail(email) {
        const emailInput = element(by.model('form.email'));
        await emailInput.sendKeys(email);
    }

    async enterPass(pass) {
        const passInput = element(by.model('form.password'));
        await passInput.sendKeys(pass);
    }

    async showPass() {
        const eyeBtn = element(by.css('.btn-input-block'));
        await eyeBtn.click();
    }

    async clickLogin() {
        const loginBtn = element(by.buttonText('Login'));
        await loginBtn.click();
    }

}