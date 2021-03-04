import {$, by, element} from "protractor";
import {userEmail, userPass} from "../../user/creds";

export class LoginPage {
    constructor() {
        this.loginPageContent = $('.authorization-content');
        this.emailInput = element(by.model('form.email'));
        this.passInput = element(by.model('form.password'));
        this.eyeBtn = $('.btn-input-block');
        this.loginBtn = element(by.buttonText('Login'));
        this.errorMessage = $('.noty_text');
    }
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
    async fullLogin(email, pass) {
        await this.enterEmail(email);
        await this.enterPass(pass);
        await this.clickLogin();
    }
}