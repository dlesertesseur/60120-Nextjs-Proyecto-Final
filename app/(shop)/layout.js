import React from "react";
import Header from "../components/commons/Header";

function Template({ children }) {

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Template;
