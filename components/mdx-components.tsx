import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { Pre } from "./pre";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Callout,
  img: (props: any) => (
    <Image {...props} width={800} height={400} className="mx-auto" />
  ),
  th: (props: any) => (
    <th
      {...props}
      className="border p-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 whitespace-nowrap"
    />
  ),
  td: (props: any) => (
    <td
      {...props}
      className="border p-2 border-gray-300 dark:border-gray-700 whitespace-nowrap"
    />
  ),
  ul: (props: any) => <ul {...props} className="list-disc pl-6" />,
  h1: (props: any) => <h1 {...props} className="text-4xl font-bold my-6" />,
  h2: (props: any) => <h2 {...props} className="text-3xl font-bold my-6" />,
  h3: (props: any) => <h3 {...props} className="text-2xl font-bold my-6" />,
  h4: (props: any) => <h4 {...props} className="text-xl font-bold my-6" />,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  const extractRawContent = (children: any): string => {
    if (!children) return "";

    if (typeof children === "string") {
      return children;
    } else if (Array.isArray(children)) {
      return children.map((child: any) => extractRawContent(child)).join("");
    } else if (
      typeof children === "object" &&
      children.props &&
      children.props.children
    ) {
      return extractRawContent(children.props.children);
    }
    return "";
  };

  const componentsWithRaw = {
    ...components,
    pre: (props: any) => (
      <Pre {...props} raw={extractRawContent(props.children)} />
    ),
  };

  return <Component components={componentsWithRaw} />;
}
