import { Input } from "@/components/ui/input"
import { MdOutlineSearch  } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => (<div key={a.length - i}><Button variant="link" className="p-0">Hospital {a.length - i}</Button></div>)
  ).reverse()

export default function Component() {
    const [distance, setDistance] = React.useState("10")

    return (
        <div className="my-14">
            <div className="bg-sky-700 px-14 py-5">
                <h2 className="text-white text-3xl font-bold">Find Your Perfect Pet Hospital</h2>
                <div className="flex flex-row items-center mt-6 gap-2">
                    <Input type="text" placeholder="Enter address, city or zip code." className="bg-white max-w-[500px]" />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{distance} Miles</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                            <DropdownMenuSeparator /> */}
                            <DropdownMenuRadioGroup value={distance} onValueChange={setDistance}>
                                <DropdownMenuRadioItem value="10">10 Miles</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="15">15 Miles</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="25">25 Miles</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="50">50 Miles</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <Button color="none" variant="outline" size="icon" style={{backgroundColor: 'none'}}>
                        <MdOutlineSearch />
                    </Button>
                </div>

                <div className="my-2">
                    <p className="text-gray-200 text-xs font-medium leading-none">By clicking search, you agree to our Terms and Conditions.</p>
                </div>

                <div className="mt-4 mb-2 flex flex-row gap-2 flex-wrap">
                    <Button variant="outline" size="sm" className="rounded-2xl">ALL HOSPITALS</Button>
                    <Button variant="outline" size="sm" className="rounded-2xl">YOUR REGION</Button>
                    <Button variant="outline" size="sm" className="rounded-2xl">YOUR DEPARTMENT</Button>
                    <Button variant="outline" size="sm" className="rounded-2xl">AVAILABILITY of SURGERY</Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 bg-zinc-100 py-5 px-14">
                <div className="col-span-6">
                    <div className="flex flex-row items-center gap-2">
                        <BsExclamationCircle size={24} />
                        <span className="text-zinc-900 text-base font-bold">No results were found. Please try another location.</span>
                    </div>
                    
                    <ScrollArea className="h-[560px] w-full rounded-md border">
                        <div className="p-4">
                            {/* <h4 className="mb-4 text-sm font-medium leading-none">Hospital List</h4> */}
                            {tags.map((tag, i, a) => (
                                <div key={a.length - i} className="text-sm py-3">
                                    {tag}
                                    <Separator className="my-2" />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
                <div className="col-span-6">
                    <iframe
                        width="100%"
                        height="768"
                        frameBorder="0" style={{border:0}}
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}