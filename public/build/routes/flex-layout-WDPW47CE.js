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
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Parent, null, /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child")));
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
  display: "flex",
  "& child": {
    backgroundColor: "#0074d9",
    padding: "20px",
    color: "white"
  },
  "& child:nth-of-type(1)": {},
  "& child:nth-of-type(2)": {},
  "& child:nth-of-type(3)": {}
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flex-layout-WDPW47CE.js.map
