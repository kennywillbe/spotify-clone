"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPlay } from "react-icons/fa"

interface ListitemProps {
  image: string
  name: string
  href: string
}

const Listitem: React.FC<ListitemProps> = ({ image, name, href }) => {
  const router = useRouter()

  const onClick = () => {
    // add auth before push
    router.push(href)
  }
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-x-3 overflow-hidden rounded-lg bg-neutral-100 pr-4 hover:bg-neutral-100/70 dark:bg-neutral-100/10 dark:hover:bg-neutral-100/20"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <span className="truncate py-5 font-medium">{name}</span>
      <div className="absolute right-2 flex items-center justify-center rounded-full bg-green-500 p-3.5 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:opacity-100">
        <FaPlay className="text-black" />
      </div>
    </button>
  )
}

export default Listitem
