'use strict';
import {browser, by, element} from "protractor";


export class Homepage {
    constructor() {}

 //   homepageContent = element(by.id('certs'))

    async clickLoginBtn() {
        const loginBtn = element(by.xpath('//span[contains(text(),\'Log in\')]'));
        await loginBtn.click();
    }

    async clickMyProfileBtn() {
        const myProfileBtn = element(by.xpath('//header/div[1]/div[1]/div[1]/button[1]'));
        await myProfileBtn.click();
    }

    async open() {
        const homepageUrl = 'https://www.sbzend.ssls.com/';
        await browser.get(homepageUrl);
    }

}