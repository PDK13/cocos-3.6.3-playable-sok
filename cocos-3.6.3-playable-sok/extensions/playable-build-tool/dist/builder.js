"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = exports.unload = exports.load = void 0;
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
exports.configs = {
    "web-mobile": {
        hooks: "./hooks",
        options: {
            isPlayable: {
                label: "i18n:playable-build-tool.isPlayable.label",
                description: "i18n:playable-build-tool.isPlayable.description",
                default: "false",
                render: {
                    ui: "ui-checkbox",
                },
            },
            /*splitJs: {
              label: "i18n:playable-build-tool.splitJs.label",
              description: "i18n:playable-build-tool.splitJs.description",
              default: "false",
              render: {
                ui: "ui-checkbox",
              },
            },*/
            gzip: {
                label: "i18n:playable-build-tool.gzip.label",
                description: "i18n:playable-build-tool.gzip.description",
                default: "false",
                render: {
                    ui: "ui-checkbox",
                },
            },
            loading: {
                label: "i18n:playable-build-tool.loading.label",
                description: "i18n:playable-build-tool.loading.description",
                default: "true",
                render: {
                    ui: "ui-checkbox",
                },
            },
            adNetwork: {
                label: "i18n:playable-build-tool.adNetwork.label",
                description: "i18n:playable-build-tool.adNetwork.description",
                default: "test",
                render: {
                    ui: "ui-select",
                    items: [
                        { label: "test", value: "test" },
                        { label: "applovin", value: "applovin" },
                        { label: "facebook(zip)", value: "facebook" },
                        { label: "facebook(html)", value: "facebook_html" },
                        { label: "google", value: "google" },
                        { label: "ironsource", value: "ironsource" },
                        { label: "mintegral", value: "mintegral" },
                        { label: "unity", value: "unity" },
                    ],
                },
            },
        },
    },
};
