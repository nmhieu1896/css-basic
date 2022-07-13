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
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  height: "auto",
  background: "hsl(206deg 10% 76% / 0.5)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout-26KO5FUR.js.map
