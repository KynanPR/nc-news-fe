import { Paper, Grid } from "@mui/material";
import dayjs from "dayjs";

export default function CommentCard({ commentData }) {
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
      <Grid container>
        <Grid size={5}>{commentData.author}</Grid>
        <Grid size={5}>
          {dayjs(commentData.created_at).format("YYYY-MM-DD")}
        </Grid>
        <Grid size={2}>{commentData.votes}</Grid>
        <Grid size={12}>{commentData.body}</Grid>
      </Grid>
    </Paper>
  );
}
