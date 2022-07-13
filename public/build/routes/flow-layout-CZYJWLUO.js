import {
  Outlet
} from "/build/_shared/chunk-HTUOCA26.js";
import {
  styled
} from "/build/_shared/chunk-44QAAYCA.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout.tsx?browser
init_react();

// app/routes/flow-layout.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
var Wrapper = styled("div", {
  width: "100%",
  height: "300px",
  "& h1": {
    fontSize: "$28",
    textAlign: "center"
  }
});
var Section = styled("section", {
  border: "1px solid $purple500",
  padding: "40px"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout-CZYJWLUO.js.map
