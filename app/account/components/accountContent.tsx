"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const AccountContent = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const subscription = null

  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p>No active plan.</p>
          <Dialog>
            <DialogTrigger className="h-10 rounded-lg bg-black px-4 py-2 text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white">
              Subscribe
            </DialogTrigger>
            <DialogContent className="h-full w-full border-[1px] border-black bg-white  dark:bg-neutral-900 sm:h-full md:h-[800px] md:w-[600px] lg:h-auto lg:w-3/6 xl:w-2/5">
              <DialogHeader>
                <DialogTitle className="text-center">Subscriptions</DialogTitle>
                <DialogDescription className="text-center">
                  Subscribe to a plan to get access to all features.
                </DialogDescription>
              </DialogHeader>
              <div className="w-{250px] h-[595px] dark:border-black rounded-lg bg-emerald-800/80">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Benefits</TableHead>
                      <TableHead className="text-center">Free</TableHead>
                      <TableHead className="text-center">Premium</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Over 80 million songs
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Podcasts and audiobooks
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Travel abroad with your music
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        For up to 14 days.
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Pick and play any track on mobile
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        Available on select playlists.
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Play songs in any order
                      </TableCell>
                      <TableCell className="text-center font-medium"></TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Ad free music listening
                      </TableCell>
                      <TableCell className="text-center font-medium"></TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Download music
                      </TableCell>
                      <TableCell className="text-center font-medium"></TableCell>
                      <TableCell className="text-center font-medium">
                        ✓
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pricing</TableCell>
                      <TableCell className="text-center font-medium">
                        Free
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        5.99€/month
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Separator className="bg-black dark:bg-white" />
              <div className="flex items-center justify-center">
                <Button
                  className=" bg-black text-white hover:border-[2px] hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
                  type="submit"
                >
                  Try for free for 14 days
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <Button disabled={loading} className="w-[300px]">
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  )
}

export default AccountContent
