import React from "react";
import AdminHeader from "./AdminHeader";
import { redirect } from "next/navigation";

const LoggedUser = ({ userInfo, productsList }) => {
  const ret =
    userInfo.role === "admin" ? (
      <>
        <AdminHeader />
        {productsList}
      </>
    ) : (
      redirect("/home")
    );
  return ret;
};

export default LoggedUser;
