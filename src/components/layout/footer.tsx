import React from "react";

// styles
import * as SH from "./styles";

type Route = {
  name: string;
  path: string;
};

const routes: Route[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Articles",
    path: "/blog",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Now",
    path: "/now",
  },
  {
    name: "Uses",
    path: "/uses",
  },
];

export const Footer: React.FC = () => {
  return (
    <SH.Footer>
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <SH.FooterInner>
                  <SH.FooterLinksWrapper>
                    {routes.map((route) => (
                      <SH.FooterLink key={route.path} href={route.path}>
                        {route.name}
                      </SH.FooterLink>
                    ))}
                  </SH.FooterLinksWrapper>
                  <SH.Copyright>
                    ©{new Date().getFullYear()} James Brooks. All rights
                    reserved.
                  </SH.Copyright>
                </SH.FooterInner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SH.Footer>
  );
};
