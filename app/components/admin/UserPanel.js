"use client";
import React from "react";
import IconButton from "../commons/IconButton";
import { useUserContext } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

const UserPanel = () => {
  const router = useRouter();
  const { userInfo, signoutUser } = useUserContext();

  return (
    <div className="flex items-center">
      {userInfo?.uid ? (
        <>
          <div className="flex text-sm font-medium text-gray-500 px-1">{`${userInfo.lastName}, ${userInfo.name}`}</div>
          <IconButton
            src={"/logout.png"}
            onClick={async () => {
              await signoutUser();
              router.replace("/home");
            }}
          />
        </>
      ) : (
        <IconButton
          src={"/user.png"}
          onClick={() => {
            router.replace("/admin");
          }}
        />
      )}
    </div>
  );
};

export default UserPanel;
