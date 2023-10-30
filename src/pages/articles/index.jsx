import React, { useState } from "react";
import moment from "moment";

import Card from "@/components/card";
import styles from "./styles.module.css";
import { Button } from "@/components/buttons";
import Input from "@/components/custom_input";
import { searchForAnArticle } from "@/components/utils";
import Seo from "@/components/seo";

export default function Articles({ articles }) {
  // useState Hook to manage the state of the search input field
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <Seo title='Articles' />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header_container}>
          <div className={styles.header}>Articles</div>
        </div>
        {/* Search Input */}
        <div className={styles.search_container}>
          <Input
            id='search'
            type='text'
            placeHolder='Find an article by title'
            onChange={e => setSearchVal(e.target.value)}
          />
        </div>

        <div>
          {/* Cards */}
          <div className={styles.card_container}>
            {searchForAnArticle(articles, searchVal).map(article => {
              return (
                <Card
                  key={article.post_id}
                  title={article.title}
                  alt={article.title}
                  description={article.description}
                  src={article.url}
                  date={moment(article.createdAt).format("lll")}
                  routePath={{
                    pathname: "/article/[slug]",
                    query: { slug: article.post_id },
                  }}
                />
              );
            })}
          </div>
        </div>
        {/* Pagination */}
        <div className={styles.button_container}>
          <Button onClick={() => console.log("Previous")}>Previous</Button>
          <Button onClick={() => console.log("Next")}>Next</Button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/articles`
  );
  const articles = await response.json();

  // By returning { props: { posts } }, the Blog component will receive `posts` as a prop at build time
  return { props: { articles } };
}
