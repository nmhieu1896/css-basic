import { styled } from "@stitches/config";
import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <Navigator>
        <Link to="text-overflow">text overflow</Link>
        <Link to="print-style">print-style</Link>
        <Link to="masonry">masonry</Link>
        <Link to="loading">loading</Link>
      </Navigator>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

const Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px",
});

const Wrapper = styled("main", {
  border: "1px solid $purple500",
  maxWidth: "50%",
  margin: "auto",
});
const Title = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0,
});

const Text = styled("p", {
  variants: {
    break: {
      wrap: {
        overflowWrap: "break-word",
      },
      wrapWithHyphens: {
        overflowWrap: "break-word",
        hyphens: "auto",
      },
      ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ellipsisSingle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      ellipsisMultiple: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 3,
      },
    },
  },
});
