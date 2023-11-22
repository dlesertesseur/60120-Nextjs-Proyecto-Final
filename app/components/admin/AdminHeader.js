import React from "react";
import Section from "../commons/Section";
import IconButton from "../commons/IconButton";
import Image from "next/image";
import Button from "../commons/Button";
import Link from "next/link";

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

          <Section align="right" className="invisible sm:visible">
            <Link href={"/home"}>
              <IconButton src={"/logout.png"} />
            </Link>
          </Section>
        </div>

        <hr className="my-2 bg-gray-200 border-1 dark:bg-gray-700" />
      </div>
      {children}
    </header>
  );
};

export default AdminHeader;
