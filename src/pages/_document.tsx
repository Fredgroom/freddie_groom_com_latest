import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Your app description here' />
        <meta name='author' content='Your name or company' />
        <meta name='keywords' content='keywords, related, to, your, app' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
