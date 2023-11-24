import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import SingupPanel from "@/app/components/admin/SingupPanel";

export const metadata = {
  title: `${APP_NAME} - SignIn`,
  description: `${APP_DESCRIPTION}`,
};

const page = () => {
  return (
    <main>
      <SingupPanel />
    </main>
  );
};

export default page;
