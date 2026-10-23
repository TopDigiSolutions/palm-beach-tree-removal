export default function ServicesLoading() {
  return (
    <div className="w-full flex-1 animate-fadeIn">
      {/* Skeleton Hero matching PageHero */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)",
        }}
      >
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
          <div className="h-7 w-48 bg-[#C5A880]/20 border border-[#C5A880]/30 rounded-full mb-5 animate-pulse" />
          <div className="h-10 sm:h-14 w-3/4 max-w-2xl bg-white/25 rounded-xl mb-4 animate-pulse" />
          <div className="h-4 w-5/6 max-w-xl bg-white/20 rounded animate-pulse" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#422E22]/15 overflow-hidden p-6 space-y-4 shadow-sm animate-pulse">
                <div className="h-48 w-full bg-stone-200 rounded-xl" />
                <div className="h-6 w-3/4 bg-stone-200 rounded" />
                <div className="h-4 w-full bg-stone-200/70 rounded" />
                <div className="h-4 w-2/3 bg-stone-200/70 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
