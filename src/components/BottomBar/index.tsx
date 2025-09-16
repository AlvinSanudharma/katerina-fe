"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Package from "@/assets/image/package.svg";
import Receipt from "@/assets/image/receipt.svg";
import Promo from "@/assets/image/promo.svg";
import Support from "@/assets/image/support.svg";
import Link from "next/link";

type Props = {};

function BottomBar({}: Props) {
  const pathname = usePathname();

  const mainMenu = [
    {
      key: "homepage",
      label: "Home",
      icon: <Package />,
      slug: "/",
    },
    {
      key: "order",
      label: "Order",
      icon: <Receipt />,
      slug: "/orders",
    },
    {
      key: "promo",
      label: "Promo",
      icon: <Promo />,
      slug: "/promos",
    },
    {
      key: "support",
      label: "Support",
      icon: <Support />,
      slug: "/helps",
    },
  ];

  return (
    <div className="sticky bottom-4 px-4 z-50">
      <ul className="rounded-full flex justify-evenly gap-x-3 bg-white shadow-[0px_12px_30px_0px_#07041517] p-3">
        {mainMenu.map((menu) => {
          let isActive = false;

          if (!!menu.slug) {
            if (
              pathname === menu.slug ||
              (pathname.startsWith(menu.slug) &&
                pathname.charAt(menu.slug.length) === "/")
            ) {
              isActive = true;
            }
          }

          return (
            <li className="" key={menu.key}>
              <Link
                aria-current={isActive ? "true" : "false"}
                href={menu.slug}
                className={[
                  "flex flex-col items-center rounded-full px-3 py-1 w-[70px]",
                  isActive ? "bg-color1 text-white" : "text-gray2",
                ].join(" ")}
              >
                {menu.icon}
                <span className="text-sm">{menu.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottomBar;
