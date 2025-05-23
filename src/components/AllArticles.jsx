import { Stack } from "@mui/material";
import Header from "./Header";
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";
import ArticleResults from "./ArticleResults";
import axios from "axios";

export default function AllArticles() {
  const [articles, setArticles] = useState([
    {
      article_id: 13,
      title: "Seafood substitutions are increasing",
      topic: "cooking",
      author: "weegembump",
      created_at: "2018-05-30T15:59:13.341Z",
      votes: 0,
      comment_count: 6,
      article_img_url: "https://AVeryRealUrl.trust",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://nc-news-29kn.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <>
      <Stack>
        <FilterBar setArticles={setArticles} />
        <ArticleResults articles={articles} />
      </Stack>
    </>
  );
}
