"use client";
import React from "react";
import { useUserContext } from "@/app/context/UserContext";

function RootLayout({ children, signin }) {
  const { userInfo } = useUserContext();

  return <>{userInfo?.uid ? children : signin}</>;
}

export default RootLayout;
