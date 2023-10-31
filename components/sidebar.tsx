"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"

import Box from "./box"
import Library from "./library"
import SidebarItem from "./sidebaritem"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  )

  return (
    <div className="flex h-full bg-neutral-300 p-1 dark:bg-black">
      <div className="hidden h-full w-[265px] flex-col gap-y-2 p-2  md:flex">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4 text-black dark:text-white">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  )
}

export default Sidebar
