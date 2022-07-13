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

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout.tsx?browser
init_react();

// app/routes/flow-layout.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(Link, {
    to: "width"
  }, "Width"), /* @__PURE__ */ React.createElement(Link, {
    to: "height"
  }, "Height")), /* @__PURE__ */ React.createElement(Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
});
var Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "20px"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout-NSHSHBDQ.js.map
