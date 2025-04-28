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
