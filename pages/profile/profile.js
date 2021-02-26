import {by, element} from "protractor";

export class ProfilePage {
    constructor() {
        this.profilePageUrl = 'https://www.sbzend.ssls.com/user/profile';
        this.profilePageContent = '';
        this.nameProperty = element(by.css(''))
        this.emailProperty = element(by.css('span[ng-hide="activeRow === \'email\'"]'));

    }
    openProfile() {

    }
    setVarName() {

    }
    setVarEmail() {

    }
    setVarPass() {
//not empty
    }
    setVarPhone() {

    }
    setVarAddress() {

    }
    setVarSupPin() {

    }
    setVarNewslatter() {

    }
}