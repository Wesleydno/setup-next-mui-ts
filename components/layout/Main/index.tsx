// material-ui
import { styled, useTheme, Theme } from "@mui/material/styles";
import {
  Container,
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { drawerWidth } from "@/constants";
import { FC, useMemo } from "react";
import Header from "@/components/layout/Header";

const Main = styled("main")(({ theme }) => ({
  ...theme.typography,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    marginLeft: -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "20px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
    marginRight: "10px",
  },
}));

type MainProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainProps> = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  const header = useMemo(
    () => (
      <Toolbar>
        <Header />
      </Toolbar>
    ),
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
        }}
      >
        {header}
      </AppBar>

      <Main theme={theme}>
        <Container maxWidth="lg">{children}</Container>
      </Main>
    </Box>
  );
};

export default MainLayout;
