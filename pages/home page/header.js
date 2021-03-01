'use strict';
import {$$, by, element} from "protractor";

export class Header {
    constructor() {
        this.loginBtn = element(by.xpath('//span[contains(text(),\'Log in\')]'));
        this.myProfileBtn = element(by.xpath('//header/div[1]/div[1]/div[1]/button[1]'));
        this.profileTab = element(by.css('a[href="/user/profile"]'));
        this.logoutBtn = $$('.ssls-header-user-nav li').last();
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickMyProfileBtn() {
        await this.myProfileBtn.click();
    }

    async clickProfileTabInDropdown() {
        await this.clickMyProfileBtn();
        await this.profileTab.click();
    }

    async clickLogOut() {
        await this.clickMyProfileBtn();
        await this.logoutBtn.click();
    }

}
