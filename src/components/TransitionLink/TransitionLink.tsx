/**
 * TransitionLink Component
 *
 * This component wraps the Next.js `Link` component to add a smooth page transition effect.
 * It applies a CSS class to the `<body>` element to trigger the transition effect
 * before navigating to the target page.
 *
 * Features:
 * - Adds a "page-transition" class to the `<body>` element for smooth transitions.
 * - Waits for the transition effect to complete before navigating.
 * - Removes the "page-transition" class after navigation.
 *
 * Props:
 * - `children`: The content to render inside the link.
 * - `href`: The target URL for the link.
 * - `className` (optional): Additional CSS classes for styling the link.
 *
 * Accessibility:
 * - Ensures the link behaves like a standard anchor element with added transition effects.
 *
 * @param {TransitionLinkProps} props - The props for the TransitionLink component.
 * @returns {JSX.Element} A link with a smooth page transition effect.
 */

"use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);

    router.push(href);

    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
