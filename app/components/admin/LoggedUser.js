import React from "react";
import AdminHeader from "./AdminHeader";
import { redirect } from "next/navigation";

const LoggedUser = ({ userInfo, children }) => {
  const ret =
    userInfo.role === "admin" ? (
      <>
        <AdminHeader />
        {children}
      </>
    ) : (
      redirect("/home")
    );
  return ret;
};

export default LoggedUser;
