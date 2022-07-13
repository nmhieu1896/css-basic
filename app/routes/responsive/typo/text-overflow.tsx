import { styled } from "@stitches/config";

export default function Index() {
  return (
    <>
      <Title>No style</Title>
      <Text>
        This is a narrow column of text, with a very long word:
        antidisestablishmentarianism.
      </Text>
      <Text>
        This is a narrow column of text, with a very long word: antidisestab
        <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
        lishmentarianism.
      </Text>
      <Text>
        This is a narrow column of text, with a very long word: antidisestab
        lishmentarianism.
      </Text>
      <Text>
        This is a narrow column of text, with a very long word:
        antidisestab-lishmentarianism.
      </Text>
      <Text>
        The same problem happens with URLs:
        https://spiritlabs.co/blog/why-frontend-developers-prefer-react
      </Text>
      <hr />
      <Title>overflow-wrap: break-word</Title>
      <Text break="wrap">
        This is a narrow column of text, with a very long word:
        antidisestablishmentarianism.
      </Text>
      <Text break="wrapWithHyphens">
        The same problem happens with URLs:
        https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact
      </Text>
      <hr />
      <Title>text-overflow: ellipsis</Title>
      <Text break="ellipsis">
        This is a narrow column of text, with a very long word:
        antidisestablishmentarianism.
      </Text>
      <Text break="ellipsis">
        TheSameProblemHappensWithURLs:https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact
      </Text>
      <hr />
      <Title>Single line ellipsis</Title>
      <Text break="ellipsisSingle">
        This is a narrow column of text, with a very long word:
        antidisestablishmentarianism.
      </Text>
      <Text break="ellipsisSingle">
        The same problem happens with URLs:
        https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact
      </Text>
      <hr />
      <Title>multiple line ellipsis</Title>
      <Text break="ellipsisMultiple">
        This is a narrow column of text, with a very long word:
        antidisestablishmentarianism. This is a narrow column of text, with a
        very long word: antidisestablishmentarianism.
      </Text>
      <Text break="ellipsisMultiple">
        The same problem happens with URLs:
        https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact, The same
        problem happens with URLs:
        https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact
      </Text>
    </>
  );
}

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
