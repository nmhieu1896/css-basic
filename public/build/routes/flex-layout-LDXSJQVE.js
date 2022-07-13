import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flex-layout.tsx?browser
init_react();

// app/routes/flex-layout.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Parent, null, /* @__PURE__ */ React.createElement("div", null, "Child"), /* @__PURE__ */ React.createElement("div", null, "Child"), /* @__PURE__ */ React.createElement("div", null, "Child")));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
});
var Parent = styled("div", {
  display: "flex"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flex-layout-LDXSJQVE.js.map
