import {by, element} from "protractor";
import {userProfileData} from "../../creds";

export class ProfilePage {
    constructor() {
        this.profilePageUrl = 'https://www.sbzend.ssls.com/user/profile';
        this.profilePageContent = '';
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
 /*   //is not empty ↓ переделать
    async getVarPass() {
        await this.form.get(2).getText().then((value) => {
            userProfileData.pass = text;
            return userProfileData.pass;
        });

    }
    */
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
  /*  setVarNewslatter() {

    }

   */

    async grabValuesFromTheTable() {
        await this.getVarName();
        await this.getVarEmail();
        await this.getVarPhone();
        await this.getVarAddress();
        await this.getVarSupPin();
    }
}