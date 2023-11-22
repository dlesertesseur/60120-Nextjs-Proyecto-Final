import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/consfig";
import SinginPanel from "@/app/components/admin/SinginPanel";

export const metadata = {
  title: `${APP_NAME} - SignIn`,
  description: `${APP_DESCRIPTION}`,
};

const page = () => {
  return (
    <main>
      <SinginPanel />
    </main>
  );
};

export default page;
