import React, { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <section className="py-14">{children}</section>;
};

export default Section;
