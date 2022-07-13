import {
  Outlet
} from "/build/_shared/chunk-HTUOCA26.js";
import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width.tsx?browser
init_react();

// app/routes/flow-layout/width.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    style: { margin: "0" }
  }, "width algorithm"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
var Wrapper = styled("div", {
  width: "100%",
  height: "50px",
  border: "1px solid $blue500",
  margin: "30px",
  textAlign: "center",
  fontSize: "$20",
  lineHeight: "50px",
  textTransform: "uppercase",
  "&.100%": {
    width: "100%"
  },
  "&.auto": {
    width: "auto"
  }
});
var H2 = styled("h2", {
  background: "$green500",
  display: "table",
  letterSpacing: "1.5px",
  minWidth: "min-content",
  maxWidth: "max-content"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout/width-V5TCDDMP.js.map