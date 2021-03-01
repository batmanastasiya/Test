import {$, by, element} from "protractor";
import {userEmail, userPass} from "../../user/creds";

export class LoginPage {
    constructor() {
        this.loginPageContent = $('.authorization-content');
        this.emailInput = element(by.model('form.email'));
        this.passInput = element(by.model('form.password'));
        this.eyeBtn = $('.btn-input-block');
        this.loginBtn = element(by.buttonText('Login')); //этот селектор может быть совсем не оч
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
    async fullLogin() {
        await this.enterEmail(userEmail);
        await this.enterPass(userPass);
        await this.clickLogin();
    }
}