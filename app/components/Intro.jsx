import Link from "next/link"
import { themeRoundedBtn } from "./Button"
import Image from "next/image"

const Intro = () => {
  return (
    <main className="p-8 flex gap-4 items-center justify-between md:flex-row flex-col-reverse">
      <div className="md:w1/2 w-full aspect-square md:p-8 overflow-hidden">
      <div  className="aspect-square object-cover rounded-md h-min overflow-hidden transition-all cursor-pointer">
       <Image src="/kits.webp" width={1080} height={1080} className="w-full aspect-square rounded-lg hover:scale-110 object-cover transition-all  duration-150"/>

      </div>
      </div>
      <div className="md:w1/2 w-full">
        <h1 className="text-3xl font-semibold text-gray-900 my-10">
      About our organization
        </h1>
        <p>

        Phro is a non-governmental trust dedicated to serving the underprivileged communities of Pakistan.
        </p>
        <p>
        Our mission is to create sustainable solutions for some of the most pressing social issues, including poverty, hunger, education, and healthcare.
        </p>
        <div className="flex gap-4 py-6">
        <Link className="p-3 px-4 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-900 transition-all" href="/donate">Donate now</Link>
        <Link href="/volunteer-request" className="p-3 px-4 rounded-full text-gray-700 font-bold border-2 transition-all border-gray-700">Become a volunteer</Link>
        </div>
      </div>
    </main>
  )
}

export default Intro
