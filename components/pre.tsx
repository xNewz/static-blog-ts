"use client";

import React, { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import clsx from "clsx";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  raw: string;
  buttonClasses?: string;
}

export function Pre({
  children,
  raw,
  buttonClasses = "absolute top-3 right-3 bg-zinc-900",
  ...props
}: PreProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <pre
        {...props}
        className={clsx("relative", props.className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </pre>
      <div
        className={clsx("absolute top-3 right-3", { "opacity-0": !isHovered })}
        onMouseEnter={() => setIsHovered(true)} // Add onMouseEnter event handler
      >
        <CopyButton text={raw} />
      </div>
    </div>
  );
}
