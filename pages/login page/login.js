import {by, element} from "protractor";

export class LoginPage {
    constructor() {
        this.loginPageContent = element(by.css('.authorization-content'));
        this.emailInput = element(by.model('form.email'));
        this.passInput = element(by.model('form.password'));
        this.eyeBtn = element(by.css('.btn-input-block'));
        this.loginBtn = element(by.buttonText('Login'));
    }
// у меня не получилось вынести переменные, так что пришлось засунуть в конструктор

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