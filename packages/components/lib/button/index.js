"use strict";
const button = require("./button.vue.js");
const install = require("../packages/utils/install.js");
const DButton = install.withInstall(button);
module.exports = DButton;
