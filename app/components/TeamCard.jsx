import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({ name, profile, role }) => {
  return (
    <Link href={`/bods/${role}`} className="block group ">
      <div className="relative mb-6">
        <Image
          src={profile}
          alt={name}
          width={720}
          height={720}
          className="w-full rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
        />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
        {name}
      </h4>
      <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
        {role}
      </span>
    </Link>
  );
};

export default TeamCard;
