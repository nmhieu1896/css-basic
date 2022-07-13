import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <Parent>
        <div className="child">Child</div>
        <div className="child">
          Thisssssssssssssadasdas dasd asd asd asd asdasdas dasd asd asd sadsass
          is a child with longgggg text
        </div>
        <div className="child">Child</div>
      </Parent>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
  //   background: "$gray300",
  background: "hsl(306deg 60% 76% / 0.15)",
});

const Parent = styled("div", {
  display: "flex",
  backgroundColor: "$green500",
  "& .child": {
    backgroundColor: "#0074d9",
    padding: "20px",
    color: "white",
    border: "2px solid $red500",
    // width: "100px",
    flexBasis: "100px",
    overflow: "scroll",
    // flexGrow: 1,
    // flex: "1 0 0",
  },
  "& .child:nth-of-type(1)": {
    // flex: "1 0 0",
    // width: "1000px",
  },
  "& .child:nth-of-type(2)": {
    // flex: "1 0 0",
    // width: "2000px",
  },
  "& .child:nth-of-type(3)": {
    // flex: "1 0 0",
    // width: "1000px",
  },
});
