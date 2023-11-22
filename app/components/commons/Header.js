import React from "react";
import Section from "./Section";
import Menu from "./Menu";
import LinkButton from "./LinkButton";
import SearchBox from "./SearchBox";
import IconButton from "./IconButton";
import Image from "next/image";
import Link from "next/link";
import { menuPages, opportunities } from "../../data/data";
import { getCategories } from "@/app/data/CategoryDao";
import CartButton from "./CartButton";

const Header = async ({ children }) => {
  
  const categories = await getCategories();

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

          <Section align="center" className="invisible sm:visible">
            <SearchBox></SearchBox>
          </Section>

          <Section align="right" className="invisible sm:visible">
            <Link href={"/cart"}>
              <CartButton src={"/cart.png"} />
            </Link>
            <Link href={"/signin"}>
              <IconButton src={"/user.png"} />
            </Link>
          </Section>
        </div>

        <hr className="my-2" />

        <div className="flex items-center mx-10">
          <Section align="left" className="items-center">
            {/* <Dropdown text="Categorias" items={categories} /> */}
            <Menu
              text="Categorias"
              items={categories}
              className={"text-gray-600"}
            />
            {opportunities.map((i) => {
              const ret = (
                <LinkButton key={i.value} text={i.value} href={i.href} />
              );
              return ret;
            })}
          </Section>
          <Section align="right" className="items-center">
            {menuPages.map((i) => {
              const ret = (
                <LinkButton key={i.value} text={i.value} href={i.href} />
              );
              return ret;
            })}
          </Section>
        </div>

        <hr className="my-2 bg-gray-200 border-1 dark:bg-gray-700" />
      </div>
      {children}
    </header>
  );
};

export default Header;
