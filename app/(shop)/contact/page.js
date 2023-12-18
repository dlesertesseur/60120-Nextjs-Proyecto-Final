import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: `${APP_NAME} - Contact`,
    description: `${APP_DESCRIPTION}`,
  };
}

const Contact = () => {
  return (
    <main>
      <h1>{"Contact"}</h1>
    </main>
  );
};

export default Contact;
