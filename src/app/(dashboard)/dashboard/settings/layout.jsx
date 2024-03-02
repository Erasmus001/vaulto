export default function SettingsLayout({ children }) {
  return (
    <main className="w-full h-full flex items-start justify-start">
      {/* Main Settings View */}
      <section className="w-full flex items-start justify-start flex-col flex-1">
        {children}
      </section>
    </main>
  );
}
