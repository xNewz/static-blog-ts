import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  p: (props: any) => <p {...props} className="text-lg leading-relaxed" />,
  ul: (props: any) => <ul {...props} className="text-lg leading-relaxed" />,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
