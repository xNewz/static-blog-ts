import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { Pre } from "./pre";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  pre: (props: any) => <Pre {...props} raw={props.children} />,
  p: (props: any) => <p {...props} className="text-sm md:text-lg leading-relaxed" />,
  ul: (props: any) => <ul {...props} className="text-sm md:text-lg leading-relaxed" />,
  h1: (props: any) => <h1 {...props} className="text-2xl md:text-4xl font-bold mt-8 mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-xl md:text-3xl font-bold mt-8 mb-4" />,
  h3: (props: any) => <h3 {...props} className="text-lg md:text-2xl font-bold mt-8 mb-4" />,
  h4: (props: any) => <h4 {...props} className="text-base md:text-xl font-bold mt-8 mb-4" />,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  const extractRawContent = (children: any): string => {
    if (!children) return ''; // Return an empty string if children is null or undefined
  
    if (typeof children === 'string') {
      // If children is already a string, return it as is
      return children;
    } else if (Array.isArray(children)) {
      // If children is an array, recursively extract raw content from each element
      return children.map((child: any) => extractRawContent(child)).join('');
    } else if (typeof children === 'object' && children.props && children.props.children) {
      // If children is an object with props, extract raw content from its children
      return extractRawContent(children.props.children);
    }
  
    // If children is of other types, return an empty string
    return '';
  };  

  const componentsWithRaw = {
    ...components,
    pre: (props: any) => <Pre {...props} raw={extractRawContent(props.children)} />
  };

  return <Component components={componentsWithRaw} />;
}
