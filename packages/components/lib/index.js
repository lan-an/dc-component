"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const components = require("./components.js");
const index$1 = require("./button/index.js");
const index$2 = require("./space/index.js");
const install = function(app) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};
const index = {
  install
};
exports.Button = index$1;
exports.Space = index$2;
exports.default = index;
exports.install = install;
