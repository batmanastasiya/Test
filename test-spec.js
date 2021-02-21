import {homepageUrl} from "./page-url"

describe('My first test', function() {
    it('should open login page', function() {
        browser.get(homepageUrl);
        //homepage.clickLoginButton();
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});