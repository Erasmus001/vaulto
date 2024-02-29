import { differenceData } from "@/dummy";
import { Wrapper } from "./Wrapper";

export default function Difference() {
  return (
    <section className="w-full">
      <Wrapper>
        <div className="w-full flex items-center justify-center flex-col gap-y-24">
          <div className="xl:max-w-xl text-center">
            <h2 className="xl:text-5xl xl:font-medium leading-[1.4]">
              What makes us <b>different</b>
            </h2>
          </div>

          <div className="w-full grid grid-cols-3 gap-x-4">
            {differenceData?.map((difference) => (
              <DifferenceCard data={difference} key={difference?.id} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

function DifferenceCard({ data }) {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-y-6">
      <div>
        <div className="h-14 w-14 bg-gray-300 rounded-md" />
      </div>
      <div className="w-full flex items-start justify-start flex-col gap-y-2">
        <h2 className="text-[26px] font-medium">{data?.title}</h2>
        <p className="max-w-sm text-lg text-gray-700">{data?.description}</p>
      </div>
    </div>
  );
}
