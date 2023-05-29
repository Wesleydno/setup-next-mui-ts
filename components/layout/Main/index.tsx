import { Container } from "@mui/material";

import { FC } from "react";

type MainProps = {
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      {children}
    </Container>
  );
};

export default Main;
