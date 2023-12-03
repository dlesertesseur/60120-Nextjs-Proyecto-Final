"use client";
import React, { useContext } from "react";
import IconButton from "../commons/IconButton";
import { UserContext } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

const UserPanel = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex items-center">
      {user ? (
        <>
          <div className="flex text-sm font-medium text-gray-500 px-1">{`${user.lastName}, ${user.name}`}</div>
          <IconButton
            src={"/logout.png"}
            onClick={() => {
              setUser(null);
              router.replace("/home");
            }}
          />
        </>
      ) : (
        <IconButton
          src={"/user.png"}
          onClick={() => {
            router.replace("/signin");
          }}
        />
      )}
    </div>
  );
};

export default UserPanel;
