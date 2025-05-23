import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.2rem",
        border: "solid black 0.2rem",
        borderRadius: "2rem",
        padding: "0 0.5rem",
        backgroundColor: "#5185b9",
      }}
    >
      <SearchIcon />
      <TextField
        id="main-article-search"
        //   label="Article Search"
        variant="outlined"
        fullWidth
        //   disableUnderline
        hiddenLabel={true}
        placeholder="Article Search.."
        sx={{ border: "none" }}
      />
    </Box>
  );
}
