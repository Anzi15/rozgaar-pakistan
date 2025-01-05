import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
            <section className="bg-black text-white">
        <div className="py-8">
          <h2 className="text-3xl font-bold uppercase md:text-5xl text-center">
            Apke shar mein!
          </h2>
          <p className="text-xl text-gray-300 text-center">
          Jo Har Kadam Par Aapke Kareeb Ho.
          </p>
        </div>
      
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 bg-white text-black">
          {[
            {
              name: "Karachi",
              image: "https://i.ibb.co/XF5PMB8/istockphoto-632443888-612x612.jpg",
              slug: "/jobs/collection/karachi",
            },
            {
              name: "Lahore",
              image:
                "https://cdn.pixabay.com/photo/2021/09/09/20/28/shalimar-gardens-6611556_960_720.jpg",
              slug: "/jobs/collection/lahore",
            },
            {
              name: "Sukkur",
              image:
                "https://cdn.pixabay.com/photo/2020/01/25/12/40/pakistan-4792467_1280.jpg",
              slug: "/jobs/collection/sukkur",
            },
            {
              name: "Hyderabad",
              image:
                "https://prestinetravels.com/wp-content/uploads/2023/01/Hyderabad-Sindh-Pakistan.jpg",
              slug: "/jobs/collection/hyderabad",
            },
            {
              name: "Islamabad",
              image:
                "https://balti.pk/wp-content/uploads/2024/04/Best-Places-to-Visit-in-Islamabad.webp",
              slug: "/jobs/collection/islamabad",
            },
            {
              name: "Quetta",
              image:
                "https://www.chalopakistan.com.pk/Destination-images/db-26-1.jpg",
              slug: "/jobs/collection/quetta",
            },
          ].map((city) => (
            <a
              key={city.name}
              href={city.slug}
              className="py-4 flex flex-col gap-3 px-4 group"
            >
              <Image
                src={city.image}
                width="720"
                height="720"
                className="w-full rounded-2xl saturate-0 group-hover:saturate-100 transition-all aspect-square object-cover"
                alt={city.name}
              />
              <h3 className="text-3xl text-gray-700 text-center group-hover:hidden">
                {city.name}
              </h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page
