import React from "react";
import Header from "../components/commons/Header";

function RootLayout({ children }) {

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
