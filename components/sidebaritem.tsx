import Link from "next/link"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface SidebarItemProps {
  icon: IconType
  label: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
            flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-black hover:dark:text-white transition text-neutral-500 py-1
        `,
        active && `text-black dark:text-white `
      )}
    >
      <Icon size={24} />
      <span className="w-full truncate">{label}</span>
    </Link>
  )
}

export default SidebarItem
