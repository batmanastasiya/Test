require("babel-register")({
    presets: ["latest"]
});
require("babel-core/register");
require("babel-polyfill");

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/profile.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },

}
onPrepare: () => {
    require("babel-register");
}
