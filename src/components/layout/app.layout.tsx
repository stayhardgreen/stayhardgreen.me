import React from "react";

// components
import { Header } from "./header";

// styles
import * as SH from "./styles";

interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <SH.AppWrapper>
      <Header />
      <div className="flex">{children}</div>
    </SH.AppWrapper>
  );
};
