import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { globalCss, getCssText } from "@stitches/config";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const globalStyles = globalCss({
  ":root": {
    "@font-face": {
      "font-family": "Recursive",
      src: `url('/fonts/recursive-variable.woff2') format('woff2 supports variations'),
        url('/fonts/recursive-variable.woff2') format('woff2-variations')`,
      "font-weight": "300 1000",
      "font-display": "swap",
    },
  },
  [`html, body`]: {
    // background: rgb(0, 100, 0 / 0.05) !important; // for debugging
    fontFamily: `"Roboto", "Gotham", "Recursive", san-serif`,
  },
  body: {
    padding: "0",
    margin: "0",
    background: "hsl(0deg 0% 92%)",
  },
  "*": {
    boxSizing: "border-box",
  },
});

export default function App() {
  globalStyles();

  return (
    <html lang="en">
      <head>
        <Meta />
        {/* <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        /> */}
        {/* <link href="http://fonts.cdnfonts.com/css/gotham" rel="stylesheet" /> */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=optional"
          rel="stylesheet"
        />
        {/* <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        /> */}
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
