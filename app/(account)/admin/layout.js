"use client";
import { useUserContext } from "@/app/context/UserContext";
import LoggedUser from "@/app/components/admin/LoggedUser";

export default function RootLayout({ productsList, signin }) {
  const { userInfo } = useUserContext();

  return (
    <>
      {userInfo?.uid ? (
        <LoggedUser userInfo={userInfo} productsList={productsList} />
      ) : (
        signin
      )}
    </>
  );
}
