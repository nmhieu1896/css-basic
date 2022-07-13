import {
  Outlet
} from "/build/_shared/chunk-RK5NHEYI.js";
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
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
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
export {
  Index as default
};
//# sourceMappingURL=/build/routes/positioned-layout-422XXAQ5.js.map
