export const config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test-spec.js'],
    onPrepare() {
        browser.ignoreSynchronization = true
    }
};