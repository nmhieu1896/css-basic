import {
  styled
} from "/build/_shared/chunk-T7I4NKKG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width/auto-vs-100.tsx?browser
init_react();

// app/routes/flow-layout/width/auto-vs-100.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    className: "100%"
  }, "width: 100%"), /* @__PURE__ */ React.createElement(Wrapper, {
    className: "auto"
  }, "width: auto"));
}
var Wrapper = styled("div", {
  width: "100%",
  height: "50px",
  border: "1px solid $blue500",
  margin: "20px 0px",
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
export {
  Index as default
};
//# sourceMappingURL=/build/routes/flow-layout/width/auto-vs-100-RNROB4X4.js.map