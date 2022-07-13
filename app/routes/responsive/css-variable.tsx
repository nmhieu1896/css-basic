import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <Wrapper>
        <Article>Card 1</Article>
        <Article>Card 2</Article>
        <Article>Card 3</Article>
      </Wrapper>
      {/* ------------------ */}

      <Row>
        <Box style={{ background: "var(--pink)" }}></Box>
        <Box style={{ background: "var(--pinkred)" }}></Box>
        <Box style={{ background: "var(--red)" }}></Box>
        <Box style={{ background: "var(--orange)" }}></Box>
        <Box style={{ background: "var(--yellow)" }}></Box>
        <Box
          style={{
            background: `linear-gradient(
                            45deg,
                            var(--red),
                            var(--purple)
                        );`,
          }}
        ></Box>
      </Row>
    </>
  );
}

const Wrapper = styled("main", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--spacing)",
  padding: "var(--spacing)",

  "--spacing": "8px",
  "@media (min-width: 768px)": {
    "--spacing": "32px",
  },
  "@media (min-width: 1024px)": {
    "--spacing": "64px",
  },
});

const Article = styled("article", {
  background: "white",
  height: "200px",
  boxShadow: "0px 2px 16px hsla(0deg 0% 0% / 0.2)",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  // ----
  borderRadius: "var(--spacing)",
  padding: "var(--spacing)",
});

const Row = styled("div", {
  display: "flex",
  padding: "8px",
  gap: "8px",
  justifyContent: "center",

  "--red-hue": "0deg",
  "--intense": "100% 50%",

  "--red": `hsl(
    var(--red-hue) var(--intense)
  )`,
  "--orange": `hsl(
    calc(var(--red-hue) + 20deg)
    var(--intense)
  )`,
  "--yellow": `hsl(
    calc(var(--red-hue) + 40deg)
    var(--intense)
  )`,
  "--pinkred": `hsl(
    calc(var(--red-hue) - 20deg)
    var(--intense)
  )`,
  "--pink": `hsl(
    calc(var(--red-hue) - 40deg)
    var(--intense)
  )`,
  "--purple": `hsl(
    calc(var(--red-hue) - 80deg)
    var(--intense)
  )`,
});

const Box = styled("div", {
  width: "100px",
  height: "100px",
  borderRadius: "4px",
});
