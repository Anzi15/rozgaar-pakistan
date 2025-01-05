import { getDocs, query } from "firebase/firestore";
import Hero from "./components/Hero";
import Image from "next/image";

export default async function Home() {
  // const q = query(app)
  // const latestJobs = getDocs()
  return (
    <>
      <Hero
        title="Mustakbil, Apke hath me."
        subtitle="Explore the latest job openings, connect with top employers, and take your career to new heights."
      />
      <section className="flex p-6 items-center justify-center md:flex-row flex-col my-6 md:gap-2 gap-8">
        <div className="flex flex-col md:gap-5 my-4">
          <h2 className="text-3xl font-bold uppercase md:text-5xl md:text-left text-center">
            Ab rahein tension free
          </h2>
          <p className="text-xl text-gray-700 md:text-left text-center">
            Gher ke akhrajat, apne khuwab - sub karein poorein!
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://i.ibb.co/4d8M4RX/download.png"
            width="720"
            height="720"
            draggable="false"
            className="select-none"
          />
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="py-8">
          <h2 className="text-3xl font-bold uppercase md:text-5xl text-center ">
            Apke shar mein!
          </h2>
          <p className="text-xl text-gray-300 text-center">
            Gher ke akhrajat, apne khuwab - sub karein poorein!
          </p>
        </div>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 bg-white text-black">
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://i.ibb.co/XF5PMB8/istockphoto-632443888-612x612.jpg"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover "
              alt="Karachi"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
              Karachi
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://cdn.pixabay.com/photo/2021/09/09/20/28/shalimar-gardens-6611556_960_720.jpg"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover"
              alt="Lahore"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
              Lahore
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://cdn.pixabay.com/photo/2020/01/25/12/40/pakistan-4792467_1280.jpg"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover"
              alt="Sukkur"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
              Sukkur
            </h3>
          </div>
        </div>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 bg-white text-black">
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://prestinetravels.com/wp-content/uploads/2023/01/Hyderabad-Sindh-Pakistan.jpg"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover "
              alt="Hyderabad"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
            Hyderabad
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://balti.pk/wp-content/uploads/2024/04/Best-Places-to-Visit-in-Islamabad.webp"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover"
              alt="Islamabad"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
              Islamabad
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-3 px-4 group">
            <Image
              src="https://cdn.pixabay.com/photo/2020/01/25/12/40/pakistan-4792467_1280.jpg"
              width="720"
              height="720"
              className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover"
              alt="Sukkur"
            />
            <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
              Sukkur
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
