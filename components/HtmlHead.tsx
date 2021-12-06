/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Script from "next/script";
export default function Header({ title = "Penink" }: { title?: string }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="/bootstrap-5.0.2-dist/css/bootstrap.min.css"
        />
        ;
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <title>{title}</title>
        <meta name="description" content="the mark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/bootstrap-5.0.2-dist/js/bootstrap.min.js" />
    </>
  );
}
