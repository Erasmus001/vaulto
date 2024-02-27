/* eslint-disable jsx-a11y/aria-props */
"use client";

import { features } from "@/dummy";
import { useState } from "react";
import { toast } from "sonner";

export default function FeatureLists() {
  const [numbers, setNumbers] = useState(["01", "02", "03", "04"]);
  const [activeNumber, setActiveNumber] = useState(numbers[0]);

  // console.log(activeNumber, "active-number");

  function handleFeatureChange(index) {
    // todo: .....

    setActiveNumber(index);
    toast.info("clicked", activeNumber);
  }

  return (
    <section className="xl:w-full w-full">
      <div className="xl:max-w-[1440px] mx-auto xl:w-full py-20 xl:flex xl:items-start xl:justify-between xl:gap-20">
        <div className="xl:w-full xl:flex xl:items-start xl:justify-start xl:flex-col xl:gap-8">
          <div className="xl:w-full xl:flex xl:items-start xl:justify-start xl:flex-col xl:gap-4">
            <h2 className="xl:text-4xl xl:font-semibold">Features we offer</h2>
            <p className="xl:text-lg xl:font-medium xl:text-secondary-600 leading-[1.3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              excepturi omnis nemo corporis rem nobis incidunt et, dignissimos,
              quibusdam nihil dolor optio sapiente sint. Explicabo quod nesciunt
              repellendus mollitia modi.
            </p>
          </div>
          <div className="xl:w-full xl:flex xl:items-start xl:justify-start xl:flex-col">
            {features?.map((feature) => (
              <FeatureCard
                key={feature?.featureId}
                feature={feature}
                onChange={() => handleFeatureChange(feature?.featureIndex)}
              />
            ))}
          </div>
        </div>
        <div className="w-full xl:h-[550px] xl:rounded-lg xl:overflow-hidden xl:shadow-md">
          <div className="xl:w-full xl:h-full bg-[#e4e8ed] xl:flex xl:items-center xl:justify-center">
            <h2 className="xl:text-9xl xl:text-gray-400 xl:font-semibold">
              {activeNumber}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, onChange }) {
  return (
    <div
      className="w-full xl:flex xl:items-start xl:justify-start xl:flex-col xl:gap-3 xl:hover:bg-secondary-100 transition-colors ease-in-out xl:p-5 xl:rounded-lg cursor-pointer"
      onClick={onChange}
      aria-role="button"
    >
      <div className="xl:w-full xl:flex xl:items-start xl:justify-start xl:flex-col xl:gap-1">
        <h3 className="text-xl font-semibold text-gray-600">
          {feature?.featureTitle}
        </h3>
        <p>{feature?.featureDescription}</p>
      </div>
    </div>
  );
}
