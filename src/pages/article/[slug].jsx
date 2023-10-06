"use client";

import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import moment from "moment";

import styles from "./styles.module.css";
import Banner from "@/components/banner";
import { ScrollToTopBtn } from "@/components/buttons";
import { scrollPageToTop } from "@/components/utils";
import Seo from "@/components/seo";

// Design a Banner Components
const components = { Banner };

export default function Article({ source, article }) {
  return (
    <>
      <Seo title={article.title} />
      <div className={styles.container}>
        <div className={styles.content}>
          <Banner
            src={article.url}
            title={article.title}
            date={moment(article.createdAt).format("LLL")}
          />
          <MDXRemote {...source} components={components} />
          <div className={styles.scrollToTop_btn_container}>
            <ScrollToTopBtn onClick={scrollPageToTop} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/articles/${params.slug}`
  );
  const article = await response.json();
  // MDX text - can be from a local file, database, anywhere
  // const source = `<LatestArticles /> ${article.content} `;
  const source = `${article.content}`;

  const mdxSource = await serialize(source);

  return { props: { source: mdxSource, article: article } };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/articles`
  );
  const articles = await response.json();

  // Get the paths we want to pre-render based on posts
  const paths = articles.map(article => ({
    params: { slug: article.post_id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
