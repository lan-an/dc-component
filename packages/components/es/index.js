import * as components from "./components.js";
import { default as default2 } from "./button/index.js";
import { default as default3 } from "./space/index.js";
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
export {
  default2 as Button,
  default3 as Space,
  index as default,
  install
};
