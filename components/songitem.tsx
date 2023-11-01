"use client"

import Image from "next/image"

import PlayButton from "./playButton"

interface SongItemProps {
  data: any
  onClick: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-x-4
        overflow-hidden
        rounded-md
        bg-neutral-400
        p-3
        transition
        hover:opacity-90
        dark:bg-neutral-400/5
        dark:hover:bg-neutral-400/10
      "
    >
      <div
        className="
          relative
          aspect-square
          h-full
          w-full
          overflow-hidden
          rounded-md
        "
      >
        <Image
          className="object-cover"
          src={"/images/the_weeknd.jpeg"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-y-1 pt-4">
        <p className="w-full truncate font-semibold">{data.name}</p>
        <p
          className="
            w-full
            truncate
            pb-4
            text-sm
            text-black
            dark:text-white
          "
        >
          By {data.artist.name}
        </p>
      </div>
      <div
        className="
          absolute
          bottom-24
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  )
}

export default SongItem
