"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

import useAuthModal from "@/hooks/useAuthModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import Modal from "./Modal"
import { Label } from "./ui/label"

const AuthModal = () => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useAuthModal()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const form = event.currentTarget as HTMLFormElement
    const emailInput = form.elements.namedItem("email") as HTMLInputElement
    const email = emailInput.value
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement
    const password = passwordInput.value

    // data must be an object
    const data = { email, password }

    try {
      const response = await axios.post("/api/login", data)
      if (response.status == 200) {
        toast.success("Logged in!")
        loginModal.onClose()
        router.push("/account")
      }
    } catch (error: any) {
      if (error.response.status == 400) {
        toast.error(error.response.data)
      } else {
        toast.error("Something went wrong...")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    await axios.post("/api/loginWithGoogle").then((res) => {
      router.push(res.data)
    })
  }

  const toggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back!</h1>
        <p className="text-sm">Sign in to continue</p>
      </div>
      <div className="grid gap-2">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                className="border-[1px] focus:border-[2px] focus:border-black dark:border-neutral-400 dark:focus:border-[2px] dark:focus:border-white"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                className="border-[1px] focus:border-[2px] focus:border-black dark:border-neutral-400 dark:focus:border-[2px] dark:focus:border-white"
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button
              className="bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or Login with
            </span>
          </div>
        </div>
        <Button
          onClick={handleGoogleLogin}
          className="bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button
          className="bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-center">
        <span className="font-semibold text-black dark:text-white">
          Don&apos;t have an account?
        </span>
      </div>
      <Button
        onClick={() => {
          toggle()
        }}
        className="bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
      >
        Register
      </Button>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  )
}

export default AuthModal
