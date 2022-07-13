import {
  Link2 as Link,
  Outlet
} from "/build/_shared/chunk-VDHOEKYH.js";
import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout.tsx?browser
init_react();

// app/routes/positioned-layout.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(Link, {
    to: "relative"
  }, "Relative"), /* @__PURE__ */ React.createElement(Link, {
    to: "fixed"
  }, "Fixed"), /* @__PURE__ */ React.createElement(Link, {
    to: "modal"
  }, "Modal"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js",
    target: "_blank"
  }, "Stacking context"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/overflow.js",
    target: "_blank"
  }, "Overflow")), /* @__PURE__ */ React.createElement(Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "150vh",
  border: "1px solid $green500",
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
  fontSize: "$28"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/positioned-layout-5XBF3IPD.js.map
