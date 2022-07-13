import { styled } from "@stitches/config";

export default function () {
  return (
    <>
      <List>
        <li>
          <a href="">
            <img src="/ws-a.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-c.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-d.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-g.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-h.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-b.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-e.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-d.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-a.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-c.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-f.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-g.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-h.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-b.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-e.jpeg" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/ws-d.jpeg" />
          </a>
        </li>
      </List>
    </>
  );
}

const List = styled("ul", {
  "--gap": "16px",
  columnCount: "3",
  columnGap: "var(--gap)",
  padding: "var(--gap)",
  li: {
    // marginTop: "5px",
    // marginBottom: "5px",
    boxSizing: "border-box",
    listStyleType: "none",
    "&:nth-child(3n+1)": { order: 1 },
    "&:nth-child(3n+2)": { order: 2 },
    "&:nth-child(3n)  ": { order: 3 },
  },
  img: {
    display: "block",
    width: "100%",
    marginBottom: "var(--gap)",
  },

  variants: {
    layout: {
      flex: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "600px",
        li: {
          width: "30%",
          "&:nth-child(3n+1)": { order: 1 },
          "&:nth-child(3n+2)": { order: 2 },
          "&:nth-child(3n)  ": { order: 3 },
        },
      },
    },
  },
});
