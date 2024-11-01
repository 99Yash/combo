import { Head, Html, Main, NextScript } from 'next/document';
import { GTWalsheim, SourceCodePro } from './fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`antialiased ${GTWalsheim.variable} ${SourceCodePro.variable}`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
