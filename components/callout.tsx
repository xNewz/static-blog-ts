import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Lightbulb, AlertCircle, TriangleAlert } from "lucide-react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger" | "info";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-600 bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100":
            type === "danger",
          "border-yellow-600 bg-yellow-50 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-50":
            type === "warning",
          "border-blue-600 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100":
            type === "info",
          "border-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-50":
            type === "default",
        }
      )}
      {...props}
    >
      {type === "warning" && (
        <div className="flex items-center">
          <TriangleAlert className="mr-3 h-5 w-5" />
          <div>{children}</div>
        </div>
      )}
      {type === "danger" && (
        <div className="flex items-center">
          <AlertCircle className="mr-3 h-5 w-5" />
          <div>{children}</div>
        </div>
      )}
      {type === "info" && (
        <div className="flex items-center">
          <Lightbulb className="mr-3 h-5 w-5" />
          <div>{children}</div>
        </div>
      )}
      {type === "default" && <div>{children}</div>}
    </div>
  );
}
