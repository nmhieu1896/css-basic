import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <Section>
        “margin-left”
        <div className="pink box with-margin"></div>
      </Section>
      <Section>
        “left”
        <div className="pink box with-position"></div>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  margin: "40px",
  gap: "40px",
});

const Section = styled("section", {
  padding: "20px 0 !important",
  flex: 1,
  background: "#EEE",
  borderRadius: "4px",
  fontSize: "0.875rem",
  textAlign: "center",
  lineHeight: 3,
  "& .with-position": {
    position: "relative",
    left: "40px",
  },
  "& .with-margin": {},
  "& .box ": {
    height: "48px",
    border: "4px solid",
  },
  "& .pink.box": {
    borderColor: "deeppink",
  },
});
