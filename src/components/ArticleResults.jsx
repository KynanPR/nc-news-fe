import { Stack } from "@mui/material";
import ArticleSummaryCard from "./ArticleSummaryCard";

export default function ArticleResults({ articles }) {
  return (
    <Stack spacing={2}>
      {articles.map((article) => {
        return (
          <ArticleSummaryCard articleData={article} key={article.article_id} />
        );
      })}
    </Stack>
  );
}
