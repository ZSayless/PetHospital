import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { AspectRatio } from "@/components/ui/aspect-ratio"

  const hospitals = Array.from({ length: 12 }).map(
    (_, i, a) => (
        <Card key={a.length - i} className="group hover:shadow-lg select-none transition ease-out duration-500">
            <a href={`/hospital/${i + 1}`} target="_self">
                <CardHeader className="pb-4">
                    <AspectRatio ratio={15/10}>
                        <img src="vite.svg" alt="hospital_img" className="group-hover:scale-110 w-full h-[200px] object-contain pb-2 transition ease-out duration-500" />
                        <span className="flex flex-row flex-nowrap gap-2 absolute bottom-2">
                            {Array.from({ length: 5}).map(
                                (_, i, a) => (
                                        <img key={a.length - i} src={i < (Math.floor((Math.random() * (5 - 3)) + 3) + 1) ? "star_02.svg" : "star_01.svg"} alt="rated_star" width={16} height={16} />
                                    )
                            )}
                        </span>
                    </AspectRatio>
                    <CardTitle><p className="group-hover:underline text-xl font-bold">Hospital XYZ {++i}</p></CardTitle>
                    <CardDescription>Ho Chi Minh City (Location)</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm line-clamp-4 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus est tristique est vehicula, at sollicitudin nisi interdum. Phasellus vehicula neque at ante euismod commodo. Proin quam ligula, gravida convallis leo eget, gravida euismod velit. Morbi dictum diam rhoncus, ornare lacus ut, consectetur nibh. Aenean rhoncus lectus a dapibus venenatis. Nunc egestas arcu et cursus bibendum. Vivamus pharetra tincidunt elit. Vivamus id massa lacus. Sed feugiat lectus quis porta efficitur. Aliquam ac sapien lacinia, fringilla lacus non, vestibulum lectus. Maecenas in urna quis metus gravida efficitur eget id libero. Phasellus pretium tincidunt augue, quis viverra elit pulvinar id. Aenean leo risus, pulvinar vel eros at, elementum pulvinar purus. Ut vehicula mollis placerat. Vestibulum nisi lorem, aliquam id justo nec, hendrerit iaculis arcu.</p>
                </CardContent>
            </a>
        </Card>
    )
  ) 

export default function Component() {
    return (
        <div className="my-14 px-2">
            <h2 className="text-slate-950 text-3xl font-bold">Popular hospitals in your location</h2>
            <div className="grid grid-cols-12 gap-x-16 gap-y-16 my-8">
                {hospitals.map((hospital, i, a) => (<div key={a.length - i} className="w-[350px] 2xl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">{hospital}</div>))}
            </div>
        </div>
    )
}