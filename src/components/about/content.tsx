import React from "react";
import Image from "next/image";

// components
import { Responsive } from "../common";

// styles
import * as SH from "./styles";

// icons
import * as Icons from "../svg";

type Social = {
  name: string;
  path: string;
  lablel: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    name: "twitter",
    path: "https://twitter.com",
    lablel: "Follow on Twitter",
    icon: <Icons.ITwitter />,
  },
  {
    name: "github",
    path: "https://github.com/stayhardgreen",
    lablel: "Follow on Github",
    icon: <Icons.IGithub />,
  },
  {
    name: "instagram",
    path: "https://instgram.com/stayhardgreen",
    lablel: "Follow on Instagram",
    icon: <Icons.IInstagram />,
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/stayhardgreen",
    lablel: "Follow on Linkedin",
    icon: <Icons.ILinkedin />,
  },
];

export const Content: React.FC = () => {
  return (
    <SH.AboutWrapper>
      <Responsive>
        <SH.AboutInner>
          {/* avatar */}
          <SH.AboutAvatarWrapper>
            <SH.AboutAvatarInner>
              <Image
                src="https://avatars.githubusercontent.com/u/79384083?v=4"
                className="aspect-square cursor-pointer rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 hover:-rotate-3 transition-transform"
                width={800}
                height={800}
                alt="stayhardgreen"
              />
            </SH.AboutAvatarInner>
          </SH.AboutAvatarWrapper>

          {/* detail */}
          <SH.AboutDetailWrapper>
            <SH.AboutDetailTitle>
              I’m Stay Hard. I build epic developer tools.
            </SH.AboutDetailTitle>

            <SH.AboutDetailDescription>
              <p>
                I’m a software developer who goes by{" "}
                <a
                  href="https://github.com/justonemorecommit"
                  className="font-bold hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                  @jackson
                </a>{" "}
                on the internet.
              </p>

              <p>
                I work at{" "}
                <a
                  href="https://exactsports.com"
                  className="font-bold hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                  Exact Sports
                </a>{" "}
                as a freelancer. You may also see me contributing to the open
                source projects, frameworks and other packages, libraries.
              </p>

              <p>
                I live in Manville, New Jersey, US with my lovely dog - Ziyi -
                cocker-spaniel. I love hiking with my dog Ziyi, working my way
                through every recipe in the family cookbook, and indulging my
                love for seeing new places
              </p>
            </SH.AboutDetailDescription>
          </SH.AboutDetailWrapper>

          {/* socials */}
          <SH.AboutSocialsWrapper>
            <SH.AboutSocialsList>
              {socials.map((social) => (
                <SH.AboutSocialItem key={social.name}>
                  <SH.AboutSocialItemLink href={social.path}>
                    {social.icon}
                    <SH.AboutSocialItemLabel>
                      {social.lablel}
                    </SH.AboutSocialItemLabel>
                  </SH.AboutSocialItemLink>
                </SH.AboutSocialItem>
              ))}
              <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                <SH.AboutSocialItemLink href="mailto:ab.berishaarber@gmail.com">
                  <Icons.IEnvolve />
                  <SH.AboutSocialItemLabel>Contact Me</SH.AboutSocialItemLabel>
                </SH.AboutSocialItemLink>
              </li>
            </SH.AboutSocialsList>
          </SH.AboutSocialsWrapper>
        </SH.AboutInner>
      </Responsive>
    </SH.AboutWrapper>
  );
};
