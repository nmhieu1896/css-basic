import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <Button>Hello</Button>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  marginTop: "100px",
  marginLeft: "150px",
  height: "900px",
  border: "solid",
});

const Button = styled("div", {
  width: "75px",
  height: "75px",
  lineHeight: "44px",
  borderRadius: "50%",
  background: "hsl(345deg 100% 40%)",
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "500",
  border: "3px solid white",
  boxShadow: "2px 2px 20px hsl(248deg 80% 40% / 0.33)",
  cursor: "pointer",
  //
  position: "fixed",
  right: 0,
  top: 50,
});
