import React from "react";
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
  return (
    <pre {...props} className={clsx("relative", props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  );
}