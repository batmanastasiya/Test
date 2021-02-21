import {browser, element, by} from "protractor";
import {protractor} from "protractor/built/ptor";
import {url} from "./url"

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get(url);

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});