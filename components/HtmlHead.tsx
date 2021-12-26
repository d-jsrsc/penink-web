/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Script from "next/script";
export default function Header({
  title = "Penink",
  keywords = [],
  description = "",
}: {
  title?: string;
  keywords?: string[];
  description?: string;
}) {
  const keywordsStr = keywords.join(", ");
  const desc = description || "Penink.club 创作你的创作";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywordsStr} />
        <meta name="author" content="ttang" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Script src="/bootstrap-5.0.2-dist/js/bootstrap.min.js" />
    </>
  );
}
