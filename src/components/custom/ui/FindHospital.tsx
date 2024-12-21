import { Input } from "@/components/ui/input"
import { MdOutlineSearch  } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => (<div key={a.length - i}><Button variant="link">Hospital {a.length - i}</Button></div>)
  ).reverse()

export default function     Component() {
    return (
        <div className="my-14">
            <div className="bg-sky-700 px-14 py-5">
                <h2 className="text-white text-2xl font-bold">Find Your Perfect Pet Hospital</h2>
                <div className="flex flex-row items-center mt-6 gap-2">
                    <Input type="text" placeholder="Enter address, city or zip code." className="bg-white max-w-96" />
                    
                    <Button color="none" variant="outline" size="icon" style={{backgroundColor: 'none'}}>
                        <MdOutlineSearch />
                    </Button>
                </div>

                <div className="my-2">
                    <p className="text-gray-200 text-xs font-medium leading-none">By clicking search, you agree to our Terms and Conditions.</p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 bg-zinc-100 py-5 px-14">
                <div className="col-span-6">
                    <div className="flex flex-row items-center gap-2">
                        <BsExclamationCircle size={24} />
                        <span className="text-zinc-900 text-base font-bold">No results were found. Please try another location.</span>
                    </div>
                    
                    <ScrollArea className="h-96 w-full rounded-md border">
                        <div className="p-4">
                            {/* <h4 className="mb-4 text-sm font-medium leading-none">Hospital List</h4> */}
                            {tags.map((tag, i) => (
                            <>
                                <div key={i} className="text-sm">
                                {tag}
                                </div>
                                <Separator className="my-2" />
                            </>
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