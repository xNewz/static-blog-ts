//@ts-nocheck

import { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';

interface ElementNode extends Parent {
  type: 'element';
  tagName: string;
  children: Node[];
  properties: { [key: string]: any };
  raw?: string;
}

const preProcess = (): ((tree: Node) => void) => (tree: Node) => {
  visit(tree, (node) => {
    const elementNode = node as ElementNode;
    if (elementNode?.type === 'element' && elementNode?.tagName === 'pre') {
      const codeEl = elementNode.children[0] as ElementNode;

      if (codeEl.tagName !== 'code') return;

      elementNode.raw = codeEl.children?.[0].value as string;
    }
  });
};

const postProcess = (): ((tree: Node) => void) => (tree: Node) => {
  visit(tree, 'element', (node) => {
    const elementNode = node as ElementNode;
    if (elementNode?.type === 'element' && elementNode?.tagName === 'pre') {
      elementNode.properties['raw'] = elementNode.raw;
      // console.log(node) here to see if you're getting the raw text
    }
  });
};

export { preProcess, postProcess };
