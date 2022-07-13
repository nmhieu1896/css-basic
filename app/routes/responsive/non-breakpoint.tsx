import { styled } from "@stitches/config";

export default function () {
  return (
    <>
      <Wrapper>
        <div className="column">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </Wrapper>
      {/* ----------------- */}
      <Form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Subscribe" />
      </Form>
    </>
  );
}

const Wrapper = styled("main", {
  ".column": {
    // width: "65%",
    // minWidth: "500px",
    // maxWidth: "800px",
    width: "clamp(500px, 65%, 800px)",
    background: "white",
    borderRadius: "4px",
    padding: "24px",
    margin: "0 auto",

    // border: "solid pink",
    // borderWidth: "clamp(4px, 5vw, 60px)",
  },
});

const Form = styled("form", {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  background: "white",
  border: "solid 1px $purple500",
  // maxWidth: "50%",
  margin: "auto",
  padding: "100px 20px",
  input: {
    border: "none",
    background: "hsl(0 0% 93%)",
    borderRadius: ".25rem",
    padding: ".75rem 1rem",
  },
  'input[type="submit"]': {
    background: "hotpink",
    color: "white",
    boxShadow: "0 .75rem .5rem -.5rem hsl(0 50% 80%)",
  },
  //------------------
  "& > input": {
    flex: "1 1 10ch",
    margin: ".5rem",
  },
  '& > input[type="email"]': {
    flex: "3 1 30ch",
  },
});
