/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Component() {
    const [lang, setLang] = React.useState("VI")
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <a href="/" className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <nav className="hidden md:flex gap-4">
            <a
              href="/"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Community
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <GlobeIcon className="h-5 w-5" />
                        <span style={{width: "2ch"}}>{lang}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Language Preference</DropdownMenuLabel>

                    <DropdownMenuSeparator />
                    
                    <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                        <DropdownMenuRadioItem value="VI">Vietnamese</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="EN">English</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

function MountainIcon(props: CSSModuleClasses) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function GlobeIcon(props: CSSModuleClasses) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  }

  function ChevronDownIcon(props: CSSModuleClasses) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }