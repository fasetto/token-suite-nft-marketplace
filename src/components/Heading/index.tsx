import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = ({ as = "h1", children, ...props }: Props) => {
  return React.createElement(as, props, children);
};

export default Heading;
