"use client";

import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // or any style you prefer
import { ReactNode, useEffect } from "react";

interface MDXLayoutProps {
  children: ReactNode;
}

const MDXLayout = ({ children }: MDXLayoutProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div>{children}</div>;
};

export default MDXLayout;
