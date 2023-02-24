import styled from "styled-components";

// avatar
export const AvatarWrapper = styled.div.attrs({
  className: "sm:px-8 top-0 order-last -mb-3 pt-3",
})``;

// intro
export const IntroWrapper = styled.div.attrs({ className: "sm:px-8 mt-9" })``;

export const IntroInner = styled.div.attrs({ className: "max-w-2xl" })``;

export const IntroTitle = styled.h1.attrs({
  className:
    "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
})``;

export const IntroDesc = styled.p.attrs({
  className: "mt-6 text-base text-zinc-600 dark:text-zinc-400",
})``;

export const IntroSocials = styled.div.attrs({
  className: "mt-6 flex gap-6",
})``;
