import { Button } from "@/components/ui/button"

function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[500px] bg-zinc-100">
        <p className="w-full text-red-700 text-6xl font-bold py-14">PAGE NOT FOUND!</p>
        <Button variant='outline' size='lg'><a href="/">Return Home</a></Button>
    </div>
  )
}

export default NotFound;
