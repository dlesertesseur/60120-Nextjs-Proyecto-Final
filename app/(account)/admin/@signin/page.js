import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
import SinginPanel from "@/app/components/admin/SinginPanel";

export async function generateMetadata({ params }) {
  return {
    title: `${APP_NAME} - SignIn`,
    description: `${APP_DESCRIPTION}`,
  }
}

const page = () => {
  return (
    <main>
      <SinginPanel />
    </main>
  );
};

export default page;
