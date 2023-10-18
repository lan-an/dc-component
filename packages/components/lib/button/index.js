"use strict";
const button = require("./button.vue.js");
const install = require("../packages/utils/install.js");
const DcqcButton = install.withInstall(button);
module.exports = DcqcButton;
