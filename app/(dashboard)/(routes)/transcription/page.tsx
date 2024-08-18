"use client"
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="relative h-20 w-20 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
        </div>
    <div className="flex justify-center items-center text-4xl">
        Under Developement
    </div>
    </div>
  )
}
export default page
