"use client"

import Header from "@/components/header"
import Listitem from "@/components/listitem"

import PageContent from "./components/pageContent"

export default function IndexPage() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-white dark:bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl text-zinc-950 dark:text-white">
            Welcome back
          </h1>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Listitem
              image={"/images/liked.png"}
              name={"Liked Songs"}
              href={"liked"}
            />
          </div>
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-black dark:text-white">
            Newest songs
          </h1>
        </div>
        <PageContent />
      </div>
    </div>
  )
}
