import { statsInfo } from "@/dummy";
import { Wrapper } from "./Wrapper";

export default function Stats() {
  return (
    <section className="w-full">
      <Wrapper>
        {statsInfo?.map((statInfo) => (
          <StatCard
            key={statInfo?.id}
            value={statInfo?.value}
            text={statInfo?.text}
          />
        ))}
      </Wrapper>
    </section>
  );
}

function StatCard({ value, text }) {
  return (
    <div className="xl:w-full flex items-center justify-center flex-col gap-2 ">
      <h2 className="xl:text-6xl font-medium">{value}</h2>
      <p className="xl:text-lg xl:text-secondary-500 xl:font-medium">{text}</p>
    </div>
  );
}
