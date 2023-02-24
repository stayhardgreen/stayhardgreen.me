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

// content
export const ContentWrapper = styled.div.attrs({
  className: "sm:px-8 mt-12 md:mt-16",
})``;

export const ContentInner = styled.div.attrs({
  className:
    "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2",
})``;

export const ArticlesWrapper = styled.div.attrs({
  className: "flex flex-col gap-16",
})``;

export const ArticleWrapper = styled.article.attrs({
  className: "group relative flex flex-col items-start",
})``;

export const ArticleTitleWrapper = styled.h2.attrs({
  className:
    "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
})``;

export const ArticleHoverAnimation = styled.div.attrs({
  className:
    "absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl",
})``;

export const ArticleOverlay = styled.span.attrs({
  className: "absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl",
})``;

export const ArticleTitle = styled.span.attrs({ className: "relative z-10" })``;

export const ArticleTimeWrapper = styled.time.attrs({
  className:
    "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5",
})``;

export const ArticleTimeLeftLine = styled.span.attrs({
  className: "absolute inset-y-0 left-0 flex items-center",
})``;

export const ArticleTimeLeftLineInner = styled.span.attrs({
  className: "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500",
})``;

export const ArticleDescription = styled.p.attrs({
  className: "relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400",
})``;

export const ArticleReadButton = styled.div.attrs({
  className:
    "relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500",
})``;

export const WorkExperienceWrapper = styled.div.attrs({
  className: "space-y-10 lg:pl-16 xl:pl-24",
})``;

export const WorkExperienceInner = styled.div.attrs({
  className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
})``;

export const WorkExperienceHeader = styled.h2.attrs({
  className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
})``;

export const WorkExperienceShowMore = styled.a.attrs({
  className:
    "cursor-pointer inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full",
})``;

export const WorkExperienceList = styled.ol.attrs({
  className: "mt-6 space-y-4",
})``;

export const WEItemWrapper = styled.a.attrs({
  className:
    "inline-flex cursor-pointer items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-medium text-zinc-900 hover:bg-zinc-50 active:bg-zinc-50 active:text-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 w-full",
})``;

export const WEItemImage = styled.div.attrs({
  className:
    "relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-hidden",
})``;

export const WEItemContent = styled.dl.attrs({
  className: "flex flex-auto flex-wrap gap-x-2",
})``;

export const WEItemCompany = styled.dd.attrs({
  className:
    "w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100",
})``;

export const WEItemRole = styled.dd.attrs({
  className: "text-xs text-zinc-500 dark:text-zinc-400",
})``;

export const WEItemDate = styled.dd.attrs({
  className: "ml-auto text-xs text-zinc-400 dark:text-zinc-500",
})``;
