"use client";
import { useUserContext } from "@/app/context/UserContext";
import LoggedUser from "@/app/components/admin/LoggedUser";
import { Suspense } from "react";
import LoadingData from "@/app/components/commons/LoadingData";

export default function RootLayout({ children, signin }) {
  const { userInfo } = useUserContext();

  return (
    <>
      {userInfo?.uid ? (
        <LoggedUser userInfo={userInfo}>
          <Suspense fallback={<LoadingData text="Loading products ..." />}>
            {children}
          </Suspense>
        </LoggedUser>
      ) : (
        signin
      )}
    </>
  );
}
