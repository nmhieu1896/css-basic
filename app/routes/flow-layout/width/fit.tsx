import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <H2>Short</H2>
      <H2>A mid-length heading, mid-length heading</H2>
      <H2>
        The longest heading you've ever seen in your life, will it ever end,The
        longest heading you've ever seen in your life, will it ever end,
      </H2>
    </>
  );
}

const H2 = styled("h2", {
  background: "$green500",
  letterSpacing: "1.5px",
  //   width: "fit-content",
  //   display: "table",
  //   minWidth: "min-content",
  //   maxWidth: "max-content",
});
