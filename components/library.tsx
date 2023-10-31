"use client"

import { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"

import useAuthModal from "@/hooks/useAuthModal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const Library = () => {
  const authmodal = useAuthModal()

  const user = true

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/api/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (res.status == 200) {
  //       res.json().then((data) => {
  //         setUser(data)
  //       })
  //     }
  //   })
  // }, [])

  // TODO: CHECK FOR SUBSCRIPTIONS

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={24} />
          <span className="text-md font-medium text-neutral-600 dark:text-neutral-400">
            Your Library
          </span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <AiOutlinePlus
              size={20}
              className="cursor-pointer text-neutral-400 transition hover:text-black hover:dark:text-white"
            />
          </DialogTrigger>
          <DialogContent className="md:w-4/8 h-full w-full border-[1px] border-black  bg-white dark:bg-neutral-900 sm:h-full md:h-auto lg:h-auto lg:w-3/6 xl:w-2/5">
            <DialogHeader>
              <DialogTitle className="text-center">Upload Song</DialogTitle>
              <DialogDescription className="text-center">
                Upload your own song to your library.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input id="title" placeholder="Title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="text" className="text-right">
                  Artis
                </Label>
                <Input
                  id="Artis"
                  placeholder="The Weeknd"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="picture">
                  Upload a picture
                </Label>
                <Input
                  className="col-span-3 bg-white text-black file:rounded-lg file:bg-black file:text-white dark:bg-black dark:text-white dark:file:bg-white dark:file:text-black"
                  id="picture"
                  type="file"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="song">
                  Upload a song
                </Label>
                <Input
                  className="col-span-3 bg-white text-black file:rounded-lg file:bg-black file:text-white dark:bg-black dark:text-white dark:file:bg-white dark:file:text-black"
                  id="song"
                  type="file"
                />
              </div>
            </div>
            <DialogFooter className="my-2">
              <Button
                className="absolute bottom-0 right-1/3 mb-3 bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3 text-black dark:text-white">
        List of Songs!
      </div>
    </div>
  )
}

export default Library
