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

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout.tsx?browser
init_react();

// app/routes/flow-layout.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  height: "1px",
  background: "hsl(206deg 100% 76% / 0.5)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center"
  }
});
var Section = styled("section", {
  border: "1px solid $purple500",
  padding: "40px",
  height: "100%"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout-NBWOHOIT.js.map
