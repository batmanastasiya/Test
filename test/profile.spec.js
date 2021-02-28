import {userEmail, userEmailBtn, userPass, userProfileData} from "../creds";
import {Header} from "../pages/home page/header";
import {Homepage} from "../pages/home page/homepage";
import {LoginPage} from "../pages/login page/login";
import {describe} from "selenium-webdriver/testing";
import {ProfilePage} from "../pages/profile/profile";

const header = new Header();
const homepage = new Homepage();
const loginPage = new LoginPage();
const profile = new ProfilePage();

describe('My profile page. Client area', () => {
    beforeAll(async () => {
        await homepage.open().catch((err) => fail(`Cannot open homepage. Error: ${err}`));
        await header.clickLoginBtn();
        await loginPage.fullLogin();
        await header.clickProfileTabInDropdown();
        await profile.getVarName();
        //await profile.grabValuesFromTheTable();
        await header.clickLogOut();
    });

    it('Verify login', async () => {
        await homepage.open();
        await header.clickLoginBtn();
        await loginPage.fullLogin();
        await header.clickProfileTabInDropdown();

        expect(profile.form.get(0).getText()).toBe(userProfileData.name, 'Cannot compare');
        expect(profile.form.get(1).getText()).toBe(userProfileData.email, 'Cannot compare');


    });

});