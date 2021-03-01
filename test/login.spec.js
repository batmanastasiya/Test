import {Header} from "../pages/home page/header";
import {Homepage} from "../pages/home page/homepage";
import {LoginPage} from "../pages/login page/login";
import {describe} from "selenium-webdriver/testing";
import {userEmail, userEmailBtn, userPass} from "../user/creds";

const header = new Header();
const homepage = new Homepage();
const loginPage = new LoginPage();

describe('Authorization page (Welcome back!)', () => {
    beforeAll(async () => {
        await homepage.open().catch((err) => fail(`Cannot open homepage. Error: ${err}`));
    });

    it('Verify login', async () => {
        await header.clickLoginBtn();

        expect(loginPage.loginPageContent.isDisplayed()).toBe(true, 'Login page is not displayed');

        await loginPage.enterEmail(userEmail);
        await loginPage.enterPass(userPass);
        await loginPage.showPass();

        expect(loginPage.passInput.getAttribute('type')).toEqual('text');

        await loginPage.clickLogin();

        expect(header.myProfileBtn.getText()).toBe(userEmailBtn, 'Button text was not changed. User is not logged in');

    });

});