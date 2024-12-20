import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="my-14">
            <div className="bg-sky-700 px-14 py-5">
                <h2 className="text-white text-2xl font-bold">Find a Hospital</h2>
                <Input type="text" placeholder="Enter address, city or zip code." className="bg-white mt-4" />
            </div>

            <div className="grid grid-cols-3 gap-4 bg-zinc-100 py-5 px-14">
                <div className="col-span-2"><p className="text-zinc-900">Hospital List</p></div>
                <div><p className="text-zinc-900">Map</p></div>
            </div>
        </div>
    )
}