"use client"

import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) return

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) return

    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900/90 outline-none focus:outline-none">
        <div className="md:w-4/8 relative mx-auto my-6 h-full w-full md:h-auto lg:h-auto lg:w-3/6 xl:w-2/5">
          {/*CONTENT*/}
          <div
            className={`translate h-full duration-300
                        ${showModal ? "translate-y-0" : "translate-y-full"}
                        ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white text-black shadow-lg outline-none focus:outline-none dark:bg-neutral-900 dark:text-white md:h-auto lg:h-auto">
              {/* {HEADER} */}
              <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                <button
                  onClick={handleClose}
                  className="absolute left-9 border-0 p-1 transition hover:opacity-70"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* {BODY} */}
              <div className="relative flex-auto p-6">{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
