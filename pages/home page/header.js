'use strict';
import {$, $$, by, element} from "protractor";

export class Header {
    constructor() {
        this.loginBtn = $('.ssls-header-add-nav').$('.ssls-toolbar__btn-text');
        this.myProfileBtn =$('.ssls-header-add-nav').$('.ssls-header-dropdown');
        this.profileTab = $('a[href="/user/profile"]');
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
