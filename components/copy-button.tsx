"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ClipboardIcon, CheckIcon } from "lucide-react";

const buttonClasses =
  "flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-zinc-500 rounded-md hover:bg-zinc-600 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps): JSX.Element {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? CheckIcon : ClipboardIcon;

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={clsx(buttonClasses, className)}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
