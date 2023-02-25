import Link from "next/link";
import styled from "styled-components";

export const AboutWrapper = styled.div.attrs({
  className: "sm:px-8 mt-16 sm:mt-48",
})``;

export const AboutInner = styled.div.attrs({
  className:
    "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12",
})``;

export const AboutAvatarWrapper = styled.div.attrs({ className: "lg:pl-20" })``;

export const AboutAvatarInner = styled.div.attrs({
  className: "max-w-xs px-2.5 lg:max-w-none",
})``;

export const AboutDetailWrapper = styled.div.attrs({
  className: "lg:order-first lg:row-span-2",
})``;

export const AboutDetailTitle = styled.div.attrs({
  className:
    "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
})``;

export const AboutDetailDescription = styled.div.attrs({
  className: "mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400",
})``;

export const AboutSocialsWrapper = styled.div.attrs({
  className: "lg:pl-20",
})``;

export const AboutSocialsList = styled.ul``;

export const AboutSocialItem = styled.li.attrs({ className: "mt-4 flex" })``;

export const AboutSocialItemLink = styled(Link).attrs({
  className:
    "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500",
})``;

export const AboutSocialItemLabel = styled.span.attrs({ className: "ml-4" })``;
