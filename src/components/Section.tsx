import React, { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <section className="py-14 mt-0">{children}</section>;
};

export default Section;
