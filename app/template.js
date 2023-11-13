"use client";
import React, { useEffect } from "react";
import Header from "./components/commons/Header";
import { usePathname } from "next/navigation";

function Template({ children }) {
  const path = usePathname();

  return (
    <div>
      {path !== '/sigin' && path !== '/admin' ? <Header /> : null}
      {children}
    </div>
  );
}

export default Template;
