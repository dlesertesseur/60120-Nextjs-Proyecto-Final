import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${APP_NAME} - About`,
    description: `${APP_DESCRIPTION}`,
  };
}

const About = () => {
  return (
    <main>
      <h1>{"Abaout"}</h1>
    </main>
  );
};

export default About;
