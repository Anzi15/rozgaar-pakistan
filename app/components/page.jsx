"use client";
import React from "react";
import componentsData from "../data/componenets.json";
import SuccessStoryCard from "../components/SuccessStoryCard";
import InitiativesCard from "./InitiativesCard";
import {
  FaBalanceScale,
  FaHandHoldingHeart,
  FaChild,
  FaBook,
  FaLeaf,
  FaVenusMars,
  FaTools,
} from "react-icons/fa";

const page = () => {
  const iconMapping = {
    FaBalanceScale: FaBalanceScale,
    FaHandHoldingHeart: FaHandHoldingHeart,
    FaChild: FaChild,
    FaBook: FaBook,
    FaLeaf: FaLeaf,
    FaVenusMars: FaVenusMars,
    FaTools: FaTools,
  };

  return (
    <section>
      <div>
        <h2 className="py-4 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
          Our Components
        </h2>
      </div>
      <div className="grid gird-cols-2 md:grid-cols-4 gap-12 max-w-xl mx-auto md:max-w-3xl lg:max-w-full p-4">
        {componentsData.map((initiative, i) => {
          const Icon = iconMapping[initiative.icon]; // Map the icon string to the component
          return (
            <InitiativesCard
              key={i}
              icon={Icon} // Pass the actual component
              title={initiative.title}
              description={initiative.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
