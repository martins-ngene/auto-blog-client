import Head from "next/head";
import React from "react";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Auto Blog AI' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
