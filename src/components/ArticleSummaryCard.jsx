import { Grid, Paper, Box } from "@mui/material";
import dayjs from "dayjs";

export default function ArticleSummaryCard({ articleData }) {
  return (
    <Paper
      elevation={2}
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box sx={{ width: "15rem", maxHeight: "15rem" }}>
        <img src={articleData.article_img_url} />
      </Box>
      <Grid container>
        <Grid size={6}>{articleData.title}</Grid>
        <Grid size={3}>{articleData.topic}</Grid>
        <Grid size={3}>{articleData.votes}</Grid>
        <Grid size={6}>{articleData.author}</Grid>
        <Grid size={3}>
          {dayjs(articleData.created_at).format("YYYY-MM-DD")}
        </Grid>
        <Grid size={3}>{articleData.comment_count}</Grid>
      </Grid>
    </Paper>
  );
}
