import styled from "styled-components";
import Link from "next/link";

// app
export const AppWrapper = styled.main.attrs({ className: "relative" })``;

// header
export const HeaderWrapper = styled.header.attrs({
  className:
    "!fixed top-0 w-full backdrop-blur-sm pointer-events-none relative z-50 flex items-center justify-center h-20",
})``;

export const HeaderInner = styled.div.attrs({
  className: "sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full",
})``;

export const NavWrapper = styled.div.attrs({
  className: "flex flex-1 justify-end md:justify-center",
})``;

export const NavInner = styled.div.attrs({
  className: "pointer-events-auto md:hidden",
})``;

export const NavHamburgerButton = styled.button.attrs({
  className:
    "group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",
})``;

export const Nav = styled.nav.attrs({
  className: "pointer-events-auto hidden md:block",
})``;

export const NavLinkWrapper = styled.ul.attrs({
  className:
    "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",
})``;

export const NavLink = styled.li.attrs({ className: "" })``;

export const NavA = styled(Link).attrs({
  className:
    "relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400",
})``;

export const DLButton = styled.button.attrs({
  className:
    "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
})``;

// overlay
export const OverlayWrapper = styled.div.attrs({
  className: "fixed inset-0 flex justify-center sm:px-8",
})``;

export const OverlayInner = styled.div.attrs({
  className: "flex w-full max-w-7xl lg:px-8",
})``;

export const OverlayContent = styled.div.attrs({
  className:
    "w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20",
})``;

// footer
export const Footer = styled.footer.attrs({ className: "mt-32" })``;

export const FooterInner = styled.div.attrs({
  className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
})``;

export const Copyright = styled.div.attrs({
  className: "text-sm text-zinc-400 dark:text-zinc-500",
})``;

export const FooterLinksWrapper = styled.div.attrs({
  className:
    "flex lg:gap-6 gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-200",
})``;

export const FooterLink = styled(Link).attrs({
  className: "transition hover:text-teal-500 dark:hover:text-teal-400",
})``;
