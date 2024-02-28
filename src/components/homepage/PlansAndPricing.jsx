"use client";

import { useState } from "react";

function PlansAndPricing() {
  const [activePlan, setActivePlan] = useState("individual");

  return (
    <section className="xl:w-full w-full">
      <div className="xl:max-w-[1440px] mx-auto xl:w-full py-28 xl:flex xl:items-center xl:justify-center xl:flex-col xl:gap-16 border">
        <div className="w-full flex items-center justify-center flex-col gap-7">
          <h2 className="xl:text-5xl xl:font-medium">Plans & Pricing</h2>
          <p className="xl:text-xl xl:max-w-2xl xl:text-center xl:leading-[1.7]">
            All the encrypted storage you need. Includes Vaulto Transfer,
            Backup, and eSignatures at no extra costs.
          </p>
        </div>

        <div className="bg-red-200 py-2 px-1.5 flex items-center justify-center gap-10 rounded-2xl">
          <div className="flex items-center justify-center gap-x-3">
            <input type="radio" name="fullname " id="individual" hidden />
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="flex items-center justify-center gap-x-3 cursor-pointer bg-white h-full w-full py-1 px-4 xl:rounded-xl">
            <input type="radio" name="fullname " id="individual" hidden />
            <label htmlFor="individual">Business</label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlansAndPricing;
