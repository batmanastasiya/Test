import {by, element} from "protractor";

export class LoginPage {

    emailInput = element(by.model('form.email'));
    passInput = element(by.model('form.password'));
    eyeBtn = element(by.css('.btn-input-block'));
    loginBtn = element(by.buttonText('Login'));
    loginPageContent = element(by.css('.authorization-content'));

    async enterEmail(email) {
        await this.emailInput.sendKeys(email);
    }

    async enterPass(pass) {
        await this.passInput.sendKeys(pass);
    }

    async showPass() {
        await this.eyeBtn.click();
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

}