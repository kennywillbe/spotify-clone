"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { twMerge } from "tailwind-merge"

import useAuthModal from "@/hooks/useAuthModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { Button } from "@/components/ui/button"

import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const authModal = useAuthModal()

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          setUser(data)
        })
      }
    })
  }, [])

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res: Response) => {
      if (res.status === 200) {
        toast.success("Logged out!")
        router.push("/")

        setUser(null)
      } else {
        toast.error("Something went wrong...")
      }
    })
  }

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
        className
      )}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              hover:opacity-75
              dark:bg-black
            "
          >
            <RxCaretLeft className="text-black dark:text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              hover:opacity-75
              dark:bg-black
            "
          >
            <RxCaretRight className="text-black dark:text-white" size={35} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button
            onClick={() => router.push("/")}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-black
              p-2
              transition
              hover:opacity-75
              dark:bg-white
            "
          >
            <HiHome className="text-white dark:text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-black
              p-2
              transition
              hover:opacity-75
              dark:bg-white
            "
          >
            <BiSearch className="text-white dark:text-black" size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {user ? (
            <div className="flex items-center gap-x-4">
              <Button
                onClick={handleLogout}
                className="bg-white text-black hover:border-[2px] hover:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black"
                variant={"outline"}
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white text-black hover:border-[2px] hover:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black"
                variant={"outline"}
              >
                <FaUserAlt />
              </Button>
              <div>
                <ThemeToggle />
              </div>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={() => router.push("/account")}
                  className="bg-white text-black hover:border-[2px] hover:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black"
                  variant={"outline"}
                >
                  <FaUserAlt />
                </Button>
              </div>
              <div>
                <Button
                  onClick={registerModal.onOpen}
                  className="bg-white text-black hover:border-[2px] hover:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black"
                  variant={"outline"}
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white text-black hover:border-[2px] hover:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black"
                  variant={"outline"}
                >
                  Log in
                </Button>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
