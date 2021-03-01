import {$, by, element} from "protractor";
import {userProfileData} from "../../user/creds";

export class ProfilePage {
    constructor() {
        this.profilePageContent = $('.profile-content');
        this.form = element(by.name('form')).$$('.description').$$('.text');

    }
    async getVarName() {
        await this.form.get(0).getText().then((text) => {
            userProfileData.name = text;
            return userProfileData.name;
        });
    }
    async getVarEmail() {
        await this.form.get(1).getText().then((text) => {
            userProfileData.email = text;
            return userProfileData.email;
        });

    }
    async getVarPhone() {
        await this.form.get(3).getText().then((text) => {
            userProfileData.phone = text;
            return userProfileData.phone;
        });

    }
    async getVarAddress() {
        await this.form.get(4).getText().then((text) => {
            userProfileData.address = text;
            return userProfileData.address;
        });

    }
    async getVarSupPin() {
        await this.form.get(5).getText().then((text) => {
            userProfileData.pin = text;
            return userProfileData.pin;
        });

    }
    async setVarNewslatter() {
        await this.form.get(6).getAttribute('class').then((value) => {
            userProfileData.news = value;
            return userProfileData.news;
        });

    }
    async grabValuesFromTheTable() {
        await this.getVarName();
        await this.getVarEmail();
        await this.getVarPhone();
        await this.getVarAddress();
        await this.getVarSupPin();
        await this.setVarNewslatter();
    }
}