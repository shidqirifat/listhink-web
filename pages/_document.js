import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <title>Listhink Studio - UI Design and Web Development</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
