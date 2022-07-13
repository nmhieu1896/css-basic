import {
  Link,
  Outlet
} from "/build/_shared/chunk-ULYXG37Y.js";
import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive.tsx?browser
init_react();

// app/routes/responsive.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(Link, {
    to: "css-variable"
  }, "CSS Variables"), /* @__PURE__ */ React.createElement(Link, {
    to: "clamp"
  }, "Clamp")), /* @__PURE__ */ React.createElement(Outlet, null));
}
var Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/responsive-DXVAI73Z.js.map
