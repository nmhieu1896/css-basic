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
  }, "Thissssssssssssss is a child with longgggg text"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child")));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)"
});
var Parent = styled("div", {
  display: "flex",
  backgroundColor: "$green500",
  "& .child": {
    backgroundColor: "#0074d9",
    padding: "20px",
    color: "white",
    border: "2px solid $red500",
    flexGrow: 1
  },
  "& .child:nth-of-type(1)": {},
  "& .child:nth-of-type(2)": {},
  "& .child:nth-of-type(3)": {}
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flex-layout-BAFEOH6D.js.map
