import React from "react";
import Link from "next/link";

// components
import { Responsive } from "../common";

// styles
import * as SH from "./styles";

// icons
import * as Icons from "../svg";

type Social = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    name: "twitter",
    path: "https://twitter.com",
    icon: <Icons.ITwitter />,
  },
  {
    name: "github",
    path: "https://github.com/stayhardgreen",
    icon: <Icons.IGithub />,
  },
  {
    name: "instagram",
    path: "https://instgram.com/stayhardgreen",
    icon: <Icons.IInstagram />,
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/stayhardgreen",
    icon: <Icons.ILinkedin />,
  },
  {
    name: "mail",
    path: "https://github.com/stayhardgreen",
    icon: <Icons.IMail />,
  },
];

export const Intro: React.FC = () => {
  return (
    <SH.IntroWrapper>
      <Responsive>
        <SH.IntroInner>
          <SH.IntroTitle>Hey there, I’m StayHardGreen.</SH.IntroTitle>
          <SH.IntroDesc>
            I’m a Software Developer from Staffordshire using React.js, Vue.js,
            Inertia, Laravel & Tailwind & Livewire & Alpine.js.
          </SH.IntroDesc>
          <SH.IntroSocials>
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.path}
                className="group -m-1 p-1"
              >
                {social.icon}
              </Link>
            ))}
          </SH.IntroSocials>
        </SH.IntroInner>
      </Responsive>
    </SH.IntroWrapper>
  );
};
