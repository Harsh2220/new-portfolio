import Document, { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <title>Harsh</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}