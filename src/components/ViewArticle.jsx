import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleSummaryCard from "./ArticleSummaryCard";
import { Box, Container, Typography } from "@mui/material";
import Comments from "./Comments";

export default function ViewArticle() {
  const { article_id } = useParams();

  const [fullArticleData, setFullArticleData] = useState({});

  useEffect(() => {
    axios
      .get(`https://nc-news-29kn.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        setFullArticleData(data.article);
      });
  }, [article_id]);
  return (
    <Container>
      <ArticleSummaryCard articleData={fullArticleData} />
      <Box>
        <Typography variant="body1">{fullArticleData.body}</Typography>
      </Box>
      <Comments
        articleId={article_id}
        commentCount={fullArticleData.commentCount}
      />
    </Container>
  );
}
