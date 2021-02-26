'use strict';
import {browser, by, element} from "protractor";

export class Header {
    constructor() {
        this.loginBtn = element(by.xpath('//span[contains(text(),\'Log in\')]'));
        this.myProfileBtn = element(by.xpath('//home page/div[1]/div[1]/div[1]/button[1]'));
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickMyProfileBtn() {
        await this.myProfileBtn.click();
    }

}
