import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import React from "react";

export const metadata = {
  title: `${APP_NAME} - About`,
  description: `${APP_DESCRIPTION}`,
};

const Abaout = () => {
  return (
    <main>
      <h1>Abaout</h1>
    </main>
  );
};

export default Abaout;
