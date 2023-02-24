import React, { useCallback } from "react";
import { useTheme } from "next-themes";

// components
import { Responsive } from "../common";

// styles
import * as SH from "./styles";

// icons
import * as Icons from "../svg";

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

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  return (
    <SH.HeaderWrapper>
      <SH.HeaderInner>
        <Responsive>
          <div className="relative flex gap-4">
            <div className="flex flex-1" />
            {/* nav */}
            <SH.NavWrapper>
              <SH.NavInner>
                <SH.NavHamburgerButton
                  id="headlessui-popover-button-:Rqbm:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  Menu
                  <Icons.IArrowDown />
                </SH.NavHamburgerButton>
              </SH.NavInner>
              <SH.Nav>
                <SH.NavLinkWrapper>
                  {routes.map((route) => (
                    <SH.NavLink key={route.path}>
                      <SH.NavA href={route.path}>{route.name}</SH.NavA>
                    </SH.NavLink>
                  ))}
                </SH.NavLinkWrapper>
              </SH.Nav>
            </SH.NavWrapper>

            {/* dark/light */}
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <SH.DLButton
                  type="button"
                  aria-label="Toggle dark mode"
                  onClick={toggleTheme}
                >
                  <Icons.ISun />
                  <Icons.IMoon />
                </SH.DLButton>
              </div>
            </div>
          </div>
        </Responsive>
      </SH.HeaderInner>
    </SH.HeaderWrapper>
  );
};
