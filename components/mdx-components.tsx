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
    if (!children) return '';
  
    if (typeof children === 'string') {
      return children;
    } else if (Array.isArray(children)) {
      return children.map((child: any) => extractRawContent(child)).join('');
    } else if (typeof children === 'object' && children.props && children.props.children) {
      return extractRawContent(children.props.children);
    }
    return '';
  };  

  const componentsWithRaw = {
    ...components,
    pre: (props: any) => <Pre {...props} raw={extractRawContent(props.children)} />
  };

  return <Component components={componentsWithRaw} />;
}
