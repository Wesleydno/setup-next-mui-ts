import { Link } from "@/components/common";
import { Container } from "@mui/material";

const Nav = () => {
  return (
    <Container component="nav">
      <Link
        variant="button"
        color="text.primary"
        href="/"
        sx={{ my: 1, mx: 1.5 }}
      >
        Home
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="/features"
        sx={{ my: 1, mx: 1.5 }}
      >
        Features
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="/enterprise"
        sx={{ my: 1, mx: 1.5 }}
      >
        Enterprise
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="/about"
        sx={{ my: 1, mx: 1.5 }}
      >
        About
      </Link>
    </Container>
  );
};

export default Nav;
