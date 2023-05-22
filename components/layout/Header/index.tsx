// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// third party
import { motion } from "framer-motion";
import Link from "@/components/Link";
// project imports
// project imports

import AnimateButton from "@/components/common/AnimateButton";
import { gridSpacing } from "@/constants";
import Logo from "@/components/common/Logo";

// styles
const HeaderImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  borderRadius: "20px",
  transform: "scale(1.7)",
  transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
  [theme.breakpoints.down("lg")]: {
    transform: "scale(1.2)",
  },
}));

const HeaderAnimationImage = styled("img")({
  maxWidth: "100%",
  filter: "drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))",
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={5}>
          <Grid
            container
            spacing={gridSpacing}
            sx={{
              pr: 10,
              [theme.breakpoints.down("lg")]: { pr: 0, textAlign: "center" },
            }}
          >
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.25rem", sm: "3rem", md: "4rem" },
                    fontWeight: 900,
                    lineHeight: 1.4,
                  }}
                >
                  Build Your Next Project With
                  <Box
                    component="span"
                    sx={{ ml: 2, color: theme.palette.primary.main }}
                  >
                    Berry
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="inherit"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  Berry is React based admin template which helps you to build
                  faster and beautiful web applications.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                >
                  <Grid item>
                    <AnimateButton>
                      <Button
                        component={Link}
                        href="/dashboard/default"
                        target="_blank"
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        Live Preview
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      href="https://material-ui.com/store/items/berry-react-material-admin/"
                      target="_blank"
                      size="large"
                      variant="text"
                    >
                      Purchase Now
                    </Button>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6,
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      display: "inline-flex",
                      width: "auto",
                    },
                  }}
                >
                  <Grid item>
                    <Logo />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography
                      variant="h4"
                      component="div"
                      color="inherit"
                      sx={{ fontWeight: 400, lineHeight: 1.4 }}
                    >
                      <b>Built with Material-UI &#169;</b> - The most popular
                      React Component Library.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ position: "relative", mt: 8.75 }}>
            <HeaderImage
              src={"/assets/images/landing/dashboard.png"}
              alt="Berry"
            />
            <Box
              sx={{
                position: "absolute",
                top: "-110px",
                right: theme.direction === "rtl" ? "170px" : "-170px",
                width: "290px",
                animation: "10s slideY linear infinite",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <HeaderAnimationImage
                  src={"/assets/images/landing/widget-1.png"}
                  alt="Berry"
                />
              </motion.div>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: -90,
                left: 300,
                width: 280,
                animation: "10s slideY linear infinite",
                animationDelay: "2s",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4,
                }}
              >
                <HeaderAnimationImage
                  src={"/assets/images/landing/widget-2.png"}
                  alt="Berry"
                />
              </motion.div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPage;
