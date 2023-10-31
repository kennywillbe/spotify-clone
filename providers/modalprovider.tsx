"use client"

import { useEffect, useState } from "react"

import AuthModal from "@/components/authModal"
import RegisterModal from "@/components/registermodal"

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AuthModal />
      <RegisterModal />
    </>
  )
}

export default ModalProvider
