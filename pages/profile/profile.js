import {$, by, element} from "protractor";
import {userProfileData} from "../../user/creds";

export class ProfilePage {
    constructor() {
        this.profilePageContent = $('.profile-content');
        this.form = element(by.name('form')).$$('.description').$$('.text');
    }

    async getVarName() {
         userProfileData.name = await this.form.get(0).getText();
    }

    async getVarEmail() {
        userProfileData.email = await this.form.get(1).getText();
    }

    async getVarPhone() {
        userProfileData.phone = await this.form.get(3).getText();
    }

    async getVarAddress() {
        userProfileData.address = await this.form.get(4).getText();
    }

    async getVarSupPin() {
        userProfileData.pin = await this.form.get(5).getText();
    }

    async setVarNewslatter() {
        userProfileData.news = await this.form.get(6).getAttribute('class');
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