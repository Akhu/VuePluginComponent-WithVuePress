import * as components from "./components";

const ComponentLibrary = {
  install(Vue, options = {}) {
    //Components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  }
};

export default ComponentLibrary;

if (typeof windows !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
