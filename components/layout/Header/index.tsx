import { useTheme } from "@mui/material/styles";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Nav from "./Nav";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography component="h1" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          MY BLOG
        </Typography>
        <Nav />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
