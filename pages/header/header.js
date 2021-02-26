'use strict';
import {browser, by, element} from "protractor";


export class Homepage {
    constructor() {
        this.homepageUrl = 'https://www.sbzend.ssls.com/';
        this.homepageContent = element(by.id('certs'))
    }

    async open() {
        await browser.get(this.homepageUrl);
    }
}


export class Header {
    constructor() {
        this.loginBtn = element(by.xpath('//span[contains(text(),\'Log in\')]'));
        this.myProfileBtn = element(by.xpath('//header/div[1]/div[1]/div[1]/button[1]'));
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickMyProfileBtn() {
        await this.myProfileBtn.click();
    }

}
