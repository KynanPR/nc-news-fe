import { Skeleton, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function Comments({ articleId, commentCount }) {
  const [comments, setComments] = useState(Array(commentCount));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://nc-news-29kn.onrender.com/api/articles/${articleId}/comments`
      )
      .then(({ data }) => {
        setComments(data.comments);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [commentCount, articleId]);
  return (
    <Stack spacing={1}>
      {comments.map((comment, index) =>
        !loading ? (
          <CommentCard commentData={comment} key={comment.comment_id} />
        ) : (
          <Skeleton key={index} />
        )
      )}
    </Stack>
  );
}
