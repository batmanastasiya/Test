import {$, by, element} from "protractor";
import {userEmail, userPass} from "../../creds";

export class LoginPage {
    constructor() {
        this.loginPageContent = element(by.css('.authorization-content'));
        this.emailInput = element(by.model('form.email'));
        this.passInput = element(by.model('form.password'));
        this.eyeBtn = element(by.css('.btn-input-block'));
        this.loginBtn = element(by.buttonText('Login'));
        this.errorMessage = $('.noty_text');
        //element(by.id('#noty_547712987954176000')).
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
    async fullLogin() {
        await this.enterEmail(userEmail);
        await this.enterPass(userPass);
        await this.clickLogin();
    }
}