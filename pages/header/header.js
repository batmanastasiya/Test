'use strict';
import {browser, by, element} from "protractor";

export class Homepage {
    constructor() {}
    loginBtn = element(by.xpath('//span[contains(text(),\'Log in\')]'));
    myProfileBtn = element(by.xpath('//header/div[1]/div[1]/div[1]/button[1]'));
    homepageUrl = 'https://www.sbzend.ssls.com/';
    homepageContent = element(by.id('certs'))

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickMyProfileBtn() {
        await this.myProfileBtn.click();
    }

    async open() {
        await browser.get(this.homepageUrl);
    }

}