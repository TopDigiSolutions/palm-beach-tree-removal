export default function ServiceLoading() {
  return (
    <div className="w-full flex-1 animate-fadeIn">
      {/* Skeleton Hero matching PageHero */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)",
        }}
      >
        <div className="container-custom relative z-10">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-4 w-16 bg-white/20 rounded animate-pulse" />
            <div className="h-4 w-4 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-28 bg-white/20 rounded animate-pulse" />
          </div>

          {/* Badge Skeleton */}
          <div className="h-7 w-36 bg-[#C5A880]/20 border border-[#C5A880]/30 rounded-full mb-5 animate-pulse" />

          {/* Title Skeleton */}
          <div className="space-y-3 max-w-3xl mb-6">
            <div className="h-10 sm:h-14 w-3/4 bg-white/25 rounded-xl animate-pulse" />
            <div className="h-10 sm:h-14 w-1/2 bg-white/15 rounded-xl animate-pulse" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2 max-w-2xl mb-8">
            <div className="h-4 w-full bg-white/20 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-white/20 rounded animate-pulse" />
          </div>

          {/* Button Skeletons */}
          <div className="flex flex-wrap gap-4">
            <div className="h-12 w-44 bg-[#C5A880]/40 rounded-xl animate-pulse" />
            <div className="h-12 w-40 bg-white/10 border border-white/20 rounded-xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <div className="h-8 w-60 bg-stone-200 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-stone-200/80 rounded animate-pulse" />
                <div className="h-4 w-full bg-stone-200/80 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-stone-200/80 rounded animate-pulse" />
              </div>
              <div className="h-80 w-full bg-stone-200 rounded-2xl animate-pulse" />
            </div>

            <div className="space-y-6">
              <div className="h-72 w-full bg-stone-200 rounded-2xl animate-pulse" />
              <div className="h-60 w-full bg-stone-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
