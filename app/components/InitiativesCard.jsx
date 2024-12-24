import Image from "next/image";
import Link from "next/link";
import React from "react";

const InitiativesCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Link href={`/component/${title.toLowerCase().replaceAll(" ", "-")}`} className="border-gray-300 border-3 shadow-md flex flex-col gap-4 p-6 rounded-md hover:scale-105 transition-all">
      {/* Uncomment the following line to use an image instead of an icon */}
      {/* <Image src={icon} alt={title} width="128" height="128" /> */}
      {Icon && <Icon className="text-5xl text-blue-500" />} {/* Render the icon component directly */}
      <h2 className="text-2xl">
        {title}
      </h2>
      <p>
        {description.slice(0, 110) + '...'}
      </p>
    </Link>
  );
};

export default InitiativesCard;
