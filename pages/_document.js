import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" sizes="48x48" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
