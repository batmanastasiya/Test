'use strict';
import {browser, by, element} from "protractor";


export class Homepage {
    constructor() {
        this.homepageUrl = 'https://www.sbzend.ssls.com/';
        this.homepageContent = element(by.id('certs'));
        this.profileTab = '';
    }

    async open() {
        await browser.get(this.homepageUrl);
    }
}