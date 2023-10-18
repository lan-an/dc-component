"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
exports.withInstall = withInstall;
