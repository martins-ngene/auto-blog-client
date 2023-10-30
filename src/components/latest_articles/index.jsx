import React from "react";
import moment from "moment";

import styles from "./styles.module.css";
import Card from "@/components/card";
import { getLatestArticles } from "../utils";

export default function LatestArticles({ articles }) {
  // This function gets the three lastest articles in the array
  const latestArticles = getLatestArticles(articles);
  return (
    <div className={styles.container}>
      {/* Header */}
      <div>
        <div className={styles.header}>Latest</div>
        {/* Cards */}
        <div className={styles.card_container}>
          {latestArticles.map(article => {
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
    </div>
  );
}
