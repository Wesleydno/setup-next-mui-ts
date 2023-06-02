import { Container } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
