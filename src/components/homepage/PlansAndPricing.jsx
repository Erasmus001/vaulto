"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import { pricingModel } from "@/dummy";

function PlansAndPricing() {
  const [activePlan, setActivePlan] = useState("individual");

  return (
    <section className="xl:w-full w-full bg-[#f4f6f8]" id="#pricing">
      <div className="xl:max-w-[1440px] mx-auto xl:w-full py-28 xl:flex xl:items-center xl:justify-center xl:flex-col xl:gap-16">
        <div className="w-full flex items-center justify-center flex-col gap-7">
          <h2 className="xl:text-5xl xl:font-medium">Plans & Pricing</h2>
          <p className="xl:text-xl xl:max-w-2xl xl:text-center xl:leading-[1.7]">
            All the encrypted storage you need. Includes Vaulto Transfer,
            Backup, and eSignatures at no extra costs.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-x-6 px-28">
          {pricingModel?.map((pricing) => (
            <PricingCard
              isPopular={pricing?.isPopular}
              key={pricing?.id}
              data={pricing}
            />
          ))}
          {/* <PricingCard />
          
          <PricingCard /> */}
        </div>
      </div>
    </section>
  );
}

export default PlansAndPricing;
