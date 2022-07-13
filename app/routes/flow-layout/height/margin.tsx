import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <p>Paragraph One</p>
      {/* <br /> */}
      <p>Paragraph Too</p>
      <p style={{ margin: "16px" }}>Paragraph Tree</p>
      <div>
        <p style={{ margin: "64px" }}>Paragraph For</p>
      </div>
      <div style={{ overflow: "auto" }}>
        <p>Paragraph Fine</p>
      </div>
      <p style={{ margin: "-16px" }}>Paragraph Sick</p>
      <p style={{ margin: "16px" }}>Paragraph Seven</p>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  border: "1px solid $blue500",
  margin: "30px",
  "& p": {
    textAlign: "center",
    margin: "32px",
  },
});
