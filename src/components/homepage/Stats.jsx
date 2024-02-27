import { statsInfo } from "@/dummy";

export default function Stats() {
  return (
    <section className="w-full">
      <div className="xl:max-w-[1440px] mx-auto xl:w-full xl:grid xl:grid-cols-3 py-20 border-b border-b-secondary-100">
        {statsInfo?.map((statInfo) => (
          <StatCard
            key={statInfo?.id}
            value={statInfo?.value}
            text={statInfo?.text}
          />
        ))}
      </div>
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
