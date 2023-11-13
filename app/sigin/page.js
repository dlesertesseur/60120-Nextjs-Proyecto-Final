import React from "react";
import SinginPanel from "../components/admin/SinginPanel";
import { APP_DESCRIPTION, APP_NAME } from "../data/consfig";

export const metadata = {
  title: `${APP_NAME} - Sigin`,
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
