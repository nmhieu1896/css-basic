import {
  styled
} from "/build/_shared/chunk-M72R3G74.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/relative.tsx?browser
init_react();

// app/routes/positioned-layout/relative.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Section, null, "\u201Cmargin-left\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-margin"
  })), /* @__PURE__ */ React.createElement(Section, null, "\u201Cleft\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-position"
  })));
}
var Wrapper = styled("div", {
  display: "flex",
  margin: "40px",
  gap: "40px"
});
var Section = styled("section", {
  padding: "20px 0 !important",
  flex: 1,
  background: "#EEE",
  borderRadius: "4px",
  fontSize: "0.875rem",
  textAlign: "center",
  lineHeight: 3,
  "& .with-position": {
    position: "relative",
    left: "40px"
  },
  "& .with-margin": {},
  "& .box ": {
    height: "48px",
    border: "4px solid"
  },
  "& .pink.box": {
    borderColor: "deeppink"
  }
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/positioned-layout/relative-VPF5BERZ.js.map
