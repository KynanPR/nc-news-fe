import { AppBar, Box, Typography } from "@mui/material";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    //  <Box sx={{ flexGrow: 1, width: "100%", display: "flex" }}>
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="div" lineHeight="0.8">
        NC
        <br />
        News
      </Typography>
      <Search />
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </AppBar>
    //  </Box>
  );
}
