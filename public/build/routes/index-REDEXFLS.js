import {
  Link,
  Outlet
} from "/build/_shared/chunk-VDHOEKYH.js";
import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(Link, {
    to: "flow-layout"
  }, "Flow Layout"), /* @__PURE__ */ React.createElement(Link, {
    to: "positioned-layout"
  }, "Position Layout"), /* @__PURE__ */ React.createElement(Link, {
    to: "flex-layout"
  }, "Flex Layout")), /* @__PURE__ */ React.createElement(Outlet, null));
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
//# sourceMappingURL=/build/routes/index-REDEXFLS.js.map
