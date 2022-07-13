import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <Book>
        <h2>Chapter 1</h2>
        <p>
          Outside the space-warp chamber, Rizal's great green sun had already
          set. Thick olive dusk eddied through the interplanetary transit
          center. I swore under my breath and slammed shut the warp-hatch
          switch.
        </p>
        <p>
          Locking bars whispered back. The hatch revolved on its axis, slow as
          an asteroid eroding. I threw another quick glance at my chrono. It
          still read the same as before: six Earth hours more… six hours to
          ferret out the truth or be forever reconditioned.
        </p>
        <p>
          —Six hours, that is, if Controller Alfred Kruze didn't cut it shorter.
        </p>
        <p>
          And if he did, Rizal might very well change status. Today, it was
          billed as the FedGov's outermost bastion against the Kel. Tomorrow, it
          could prove man's fatal flaw, the Achilles heel in our whole system of
          defenses.
        </p>
        <p>In which case—</p>
        <p>Involuntarily, I shivered.</p>
        <p>“Agent Traynor—?”</p>
        <p>
          The voice came from the shadows. A dull, phlegmatic, tranquilized,
          conditioned voice. I stopped short; turned fast. “Who's asking?”
        </p>
        <p>
          The man shrugged stolidly, not even picking up my tension. “I'm a port
          rep, Agent Traynor. Port rep second, that is—”
        </p>
        <p>“So who told you to come out here? Who said you should meet me?”</p>
        <p>
          “Oh…” A pause. “Well, you see, there's this sigman, Agent Traynor. Up
          in the Interworld Communications section. He had a regular 7-D
          clearance report that a FedGov Security investigation agent was
          warping in—you have to file a 7-D on all warpings, you know, Agent
          Traynor, on account of restrictives. So—well, the rep first was out to
          eat, so I just notified Rizal Security, just a routine report, and the
          unit controller there, an Agent Gaylord, he said for me to meet you,
          and—”
        </p>
        <p>
          I bit down hard and shifted my weight, both at once, wondering if a
          broken jaw would interfere with the work of a port rep second.
        </p>
        <p>
          Only then, all at once, I caught the unmistakable whish of a grav-car
          sweeping in.
        </p>
        <p>
          The lights hit us almost in the same instant. Two seconds later a man
          who said he was Agent Gaylord was jumping down and locking wrists with
          me in Rizal's traditional greeting.
        </p>
        <p>
          Even that wrist-lock set my teeth on edge. It was too solid, too
          stolid, too thorough a job of conditioning.
        </p>
        <p>Or was it maybe, just a trifle over-done?</p>
      </Book>

      <hr />

      <Wrapper>
        <p className="f-300">Home Page</p>
        <TextWrapper>
          <p className="f-400">Home Page</p>
        </TextWrapper>
        <p className="f-500">Home Page</p>
        <p className="f-600">Home Page</p>
        <p className="f-700">Home Page</p>
        <p className="f-800">Home Page</p>
        <i className="f-300">Home Page</i>
        <i className="f-400">Home Page</i>
        <i className="f-500">Home Page</i>
        <i className="f-600">Home Page</i>
        <i className="f-700">Home Page</i>
        <i className="f-800">Home Page</i>
        <BoldText className="f-300">Home Page</BoldText>
        <BoldText className="f-400">Home Page</BoldText>
        <BoldText className="f-500">Home Page</BoldText>
        <TextWrapper>
          <BoldText className="f-600">Home Page</BoldText>
        </TextWrapper>
        <BoldText className="f-700">Home Page</BoldText>
        <BoldText className="f-800">Home Page</BoldText>

        <hr />
      </Wrapper>
    </>
  );
}

const Book = styled("main", {
  width: "160%",
  transform: "translateX(-18%)",
  maxWidth: "64rem",
  margin: "32px auto",
  border: "2px solid hsl(35deg 10% 40%)",
  columnCount: 2,
  columnGap: "150px",
  padding: "50px",
  background: `linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  )`,
  p: {
    fontSize: "$20",
    "font-variation-settings": `"slnt" -10,
      "CASL" 0.8,
      "CRSV" 1;`,
  },
});

// const BoldText = styled("strong", {
//   display: "block",
// });
const TextWrapper = styled("div", {
  // [`& ${BoldText}`]: {
  //   background: "$secondary",
  // },
});

const BoldText = styled("strong", {
  display: "block",
  [`${TextWrapper} &`]: {
    background: "$secondary",
  },
});

const Wrapper = styled("div", {
  color: "$primary",
  // background: "$tertiary100",
  fontSize: "$titleM",
  ".f-400": {
    fontWeight: "400",
    my: "$x4",
  },
  ".f-300": {
    fontWeight: "300",
  },
  ".f-500": {
    fontWeight: "500",
  },
  ".f-600": {
    fontWeight: "600",
  },
  ".f-700": {
    fontWeight: "700",
  },
  ".f-800": {
    fontWeight: "800",
  },
});
