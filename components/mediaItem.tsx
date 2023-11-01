"use client"

import Image from "next/image"

interface MediaItemProps {
  data: any
  onClick?: (id: string) => void
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => {}}
      className="
        flex
        w-full
        cursor-pointer
        items-center
        gap-x-3
        rounded-md
        p-2
        hover:bg-neutral-800/50
      "
    >
      <div
        className="
          relative
          min-h-[48px]
          min-w-[48px]
          overflow-hidden
          rounded-md
        "
      >
        <Image
          fill
          src={"/images/the_weeknd.jpeg"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-black dark:text-white">{data.name}</p>
        <p className="truncate text-sm text-neutral-600 dark:text-neutral-400">
          By {data.artist.name}
        </p>
      </div>
    </div>
  )
}

export default MediaItem
