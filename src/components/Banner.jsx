import Link from "next/link";

const HeroBanner=() => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/10 border border-white/20">
            Premium Tiles Collection
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Discover Your
            <span className="block text-amber-400">
              Perfect Aesthetic
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Transform your home with premium ceramic, porcelain, marble,
            and stone tiles. Find the perfect style for every room.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={"/All-Tiles"}
              className="px-8 py-4 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition"
            >
              Browse Now
            </Link>

            <Link
              href="/my-profile"
              className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white hover:text-slate-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
export default HeroBanner