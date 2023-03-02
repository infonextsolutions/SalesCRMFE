import React from "react";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <>{children}</>;
};

export default HomeLayout;

interface HomeLayoutProps {
  children: JSX.Element[] | JSX.Element;
}