import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <Modal>
        <div className="modal-backdrop" />
        <div className="modal">Hellloooo </div>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled("div", {});

const Modal = styled("div", {
  "& .modal-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "black",
    opacity: 0.5,
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
    textAlign: "center",
  },
});
