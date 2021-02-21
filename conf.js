require("babel-register")({
    presets: ["latest"]
});
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

}
onPrepare: () => {
    require("babel-register");
}
