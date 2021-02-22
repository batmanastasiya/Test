import {browser, element, by} from "protractor";
import {protractor} from "protractor/built/ptor";
import {homepageUrl} from "./url"

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get(homepageUrl);

        expect(browser.getCurrentUrl()).toEqual('https://www.sbzend.ssls.com/');
    });
});