"use client";
import React, { useContext } from "react";
import IconButton from "../commons/IconButton";
import { UserContext } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const { user, signoutUser} = useContext(UserContext);
  return (
    <div className="flex items-center">
      {user ? (
        <div className="flex text-sm font-medium text-gray-500 px-1">{`${user.email ? user.email : null}`}</div>
      ) : null}
      <IconButton
        src={"/logout.png"}
        onClick={async () => {
          await signoutUser();
          router.replace("/home");
        }}
      />
    </div>
  );
};

export default LogoutButton;
