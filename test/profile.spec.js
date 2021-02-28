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
        await profile.grabValuesFromTheTable();
        //там не хватает одного метода для новостей. Как проверить в душе не совокупляю getAttribute?

        await header.clickLogOut();
    });

    it('Verify login', async () => {
        await homepage.open();
        await header.clickLoginBtn();
        await loginPage.fullLogin();
        await header.clickProfileTabInDropdown();

        expect(profile.form.get(0).getText()).toBe(userProfileData.name, 'Cannot compare');
        expect(profile.form.get(1).getText()).toBe(userProfileData.email, 'Cannot compare');
        expect(profile.form.get(2).isPresent()).toBeTruthy();
        expect(profile.form.get(3).getText()).toBe(userProfileData.phone, 'Cannot compare');
        expect(profile.form.get(4).getText()).toBe(userProfileData.address, 'Cannot compare');
        expect(profile.form.get(5).getText()).toBe(userProfileData.pin, 'Cannot compare');
        //еще один експект по новостям и все

    });

});