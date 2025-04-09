"use client";

import { cn } from "@/lib/utils";
import { montserrat } from "@/styles/fonts"; // ✅ use Montserrat here
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Readymade Clothes",
        url: "/shop#readymade-clothes",
        description: "In attractive and spectacular colors and designs",
      },
      {
        id: 12,
        label: "Unstitched Clothes",
        url: "/shop#unstitched-clothes",
        description: "Ladies, your style and tastes are important to us",
      },
      {
        id: 13,
        label: "Jewellery",
        url: "/shop#jewellery",
        description: "For all ages, with happy and beautiful colors",
      }
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white">
      <div className="max-w-frame mx-auto flex items-center justify-between py-5 md:py-6 px-4 xl:px-0">
        {/* Left side: mobile menu + desktop nav */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="block md:hidden">
            <ResTopNavbar data={data} />
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {data.map((item) => (
                <React.Fragment key={item.id}>
                  {item.type === "MenuItem" && (
                    <MenuItem label={item.label} url={item.url} />
                  )}
                  {item.type === "MenuList" && (
                    <MenuList data={item.children} label={item.label} />
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center: logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className={cn([
              montserrat.className, // ✅ replaced here
              "text-2xl lg:text-[32px] mb-1 whitespace-nowrap text-center",
            ])}
          >
            DESIGNER VILLA STUDIO
          </Link>
        </div>

        {/* Right: search + cart + user */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile search */}
          <Link href="/search" className="block md:hidden p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={22}
              width={22}
              alt="search"
              className="w-[22px] h-[22px]"
            />
          </Link>

          {/* Desktop search */}
          <InputGroup className="hidden md:flex bg-[#F0F0F0]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt="search"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              name="search"
              placeholder="Search for products..."
              className="bg-transparent placeholder:text-black/40"
            />
          </InputGroup>

          {/* Cart + user */}
          <CartBtn />
          <Link href="/#signin" className="hidden md:block p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={22}
              width={22}
              alt="user"
              className="w-[22px] h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
