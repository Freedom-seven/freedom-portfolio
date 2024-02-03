import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Script id='theme-switcher'>
{`
if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia('()') ))
`}
        </Script> 3:56:23 */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
