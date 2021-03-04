import {Header} from "../pages/home page/header";
import {Homepage} from "../pages/home page/homepage";
import {LoginPage} from "../pages/login page/login";
import {invalidEmail, message, userPass} from "../user/creds";

const header = new Header();
const homepage = new Homepage();
const loginPage = new LoginPage();

describe(' Authorization page. Not registered user', () => {
    beforeAll(async () => {
        await homepage.open().catch((err) => fail(`Cannot open homepage. Error: ${err}`));
    });

    it('Verify error message on login with invalid creds', async () => {
        await header.clickLoginBtn();

        expect(loginPage.loginPageContent.isDisplayed()).toBe(true, 'Login page is not displayed');

        await loginPage.enterEmail(invalidEmail);
        await loginPage.enterPass(userPass);
        await loginPage.showPass();

        expect(loginPage.passInput.getAttribute('type')).toEqual('text');

        await loginPage.clickLogin();

        expect(await loginPage.errorMessage.isDisplayed()).toBe(true, 'Error message didn\'t appear');
        expect(await loginPage.errorMessage.getText()).toBe(message);

    });
});
