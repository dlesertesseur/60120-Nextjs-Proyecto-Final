import React from "react";
import Section from "../commons/Section";
import IconButton from "../commons/IconButton";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import LabelValue from "../commons/LabelValue";

const AdminHeader = ({ children }) => {
  return (
    <header
      className={
        "sticky top-0 z-50 flex w-full justify-between items-center p-2 bg-white"
      }
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <Section align="left">
            <Image src={"/logo.png"} width={40} height={40} alt={"logo"} />
          </Section>

          <Section align="center">
            <div className="flex items-center justify-center text-lg font-semibold">
              Admin console
            </div>
          </Section>

          <Section align="right" className="invisible sm:visible">
            <LogoutButton/>
          </Section>
        </div>

        <hr className="my-2 bg-gray-200 border-1 dark:bg-gray-700" />
      </div>
      {children}
    </header>
  );
};

export default AdminHeader;
