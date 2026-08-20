import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>actorsparadise9 Pass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="18+ adult AI video membership — actorsparadise9 Pass" />
      </Head>
      <style jsx global>{`
        * { box-sizing: border-box; }
        html, body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          background: #0b0809;
          color: #f5f0eb;
        }
        button, input, select, textarea { font: inherit; }
        a { color: inherit; }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
