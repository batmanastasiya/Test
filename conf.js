require("babel-register")({
    presets: ["latest"]
});
require("babel-core/register");
require("babel-polyfill");

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './test/invalid-login.spec.js',
        './test/login.spec.js',
        './test/profile.spec.js'
    ],
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 1
    },
    suites: {
        invalid_login: './test/invalid-login.spec.js',
        login: './test/login.spec.js',
        profile: './test/profile.spec.js',
        run_all: [
            './test/invalid-login.spec.js',
            './test/login.spec.js',
            './test/profile.spec.js'
        ]
    },
}
onPrepare: () => {
    require("babel-register");
}
