import {browser, element, by} from "protractor";
import {Homepage} from "../pages/header/header";
import {LoginPage} from "../pages/login page/login";
import {describe} from "selenium-webdriver/testing";
import {userEmail, userPass} from "../creds";

const homepage = new Homepage();
const loginPage = new LoginPage();

describe('Login', () => {
    beforeAll(async () => {
        await homepage.open().catch((err) => fail(`Cannot open homepage. Error: ${err}`));
    });

    it('Verify login', async () => {
        await homepage.clickLoginBtn();

        expect(loginPage.loginPageContent.isDisplayed()).toBe(true, 'Login page is not displayed');

        await loginPage.enterEmail(userEmail);
        await loginPage.enterPass(userPass);
        await loginPage.clickLogin();


    });



});