import Header from "@/components/header"

import AccountContent from "./components/accountContent"

const Account = () => {
  return (
    <div
      className="
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        rounded-lg
        bg-white
        text-black
        dark:bg-neutral-900
        dark:text-white
      "
    >
      <Header className="bg-gradient-to-b from-emerald-800">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold text-black dark:text-white">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  )
}

export default Account
