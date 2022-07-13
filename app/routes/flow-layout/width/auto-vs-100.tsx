import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <Wrapper className="100%">width: 100%</Wrapper>
      <Wrapper className="auto">width: auto</Wrapper>
    </>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  height: "50px",
  border: "1px solid $blue500",
  margin: "20px 20px",
  textAlign: "center",
  fontSize: "$20",
  lineHeight: "50px",
  textTransform: "uppercase",

  "&.100%": {
    width: "100%",
  },
  "&.auto": {
    width: "auto",
  },
});
