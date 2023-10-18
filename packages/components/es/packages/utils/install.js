const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
export {
  withInstall
};
