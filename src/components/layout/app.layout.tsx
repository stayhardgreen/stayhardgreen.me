import React from "react";

// components
import { Header } from "./header";
import { Footer } from "./footer";

// styles
import * as SH from "./styles";

interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <SH.AppWrapper>
      <Header />
      <div>{children}</div>
      <Footer />
    </SH.AppWrapper>
  );
};
