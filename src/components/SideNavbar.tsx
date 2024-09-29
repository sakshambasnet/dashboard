"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setisCollapsed] = useState(false);
  function toggleSidebar() {
    setisCollapsed(!isCollapsed);
  }

  return (
    <div className=" relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className=" absolute right-[-20px] top-7">
        <Button 
          variant="secondary"
          className=" rounded-full p-2"
          onClick={toggleSidebar}
        >
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Setting",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
