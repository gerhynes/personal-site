import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <title>Gerard Hynes | Software Engineer</title>
      <meta
        name="description"
        content="Gerard Hynes is a software engineer based in Galway"
      />
      <meta
        name="og:title"
        property="og:title"
        content="Gerard Hynes | Software Engineer"
        key="ogtitle"
      />
      <meta
        name="og:url"
        property="og:url"
        content="https://gerardhynes.com/"
      ></meta>
      <meta
        name="og:description"
        property="og:description"
        content="Gerard Hynes is a software engineer based in Galway"
        key="ogdesc"
      />
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content="@Gerard_K_Hynes" key="twhandle" />
      <meta
        name="og:image"
        property="og:image"
        content="https://www.gerardhynes.com/social.png"
        key="ogimage"
      />
      <meta
        name="og:site_name"
        property="og:site_name"
        content="gerardhynes.com"
        key="ogsitename"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
