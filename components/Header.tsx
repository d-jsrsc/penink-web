import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <title>Frontend Bootcamp</title>
      <meta name="description" content="the mark" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
