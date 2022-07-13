import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <Wrapper>
        <P borderClr="blue">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </P>
        <P borderClr="gray">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </P>
        <P borderClr="red">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </P>
        <P borderClr="purple">
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source.
        </P>
        <P borderClr="green">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </P>
      </Wrapper>
      <hr />

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
    </>
  );
}

const Wrapper = styled("div", {
  columns: "2",
  columnGap: "16px",
  padding: "16px",
});

const P = styled("p", {
  border: "3px solid",
  //   "break-inside": "avoid",

  variants: {
    borderClr: {
      purple: { borderColor: "$purple500" },
      red: { borderColor: "$red500" },
      green: { borderColor: "$green500" },
      blue: { borderColor: "$blue500" },
      gray: { borderColor: "$gray500" },
    },
  },
});

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
});
