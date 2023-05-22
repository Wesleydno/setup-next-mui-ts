import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/components/Link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <Main>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example in TypeScript
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Main>
  );
}
