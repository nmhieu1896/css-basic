import {
  styled
} from "/build/_shared/chunk-M72R3G74.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/modal.tsx?browser
init_react();

// app/routes/positioned-layout/modal.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Modal, null, /* @__PURE__ */ React.createElement("div", {
    className: "modal-backdrop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, "Hellloooo ")));
}
var Wrapper = styled("div", {});
var Modal = styled("div", {
  "& .modal-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "black",
    opacity: 0.5
  },
  "& .modal": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "85%",
    height: "200px",
    margin: "auto",
    background: "white",
    padding: "16px",
    textAlign: "center"
  }
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/positioned-layout/modal-UOP36WO7.js.map
