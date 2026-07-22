import Link from "next/link";

const LearnMore =() => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
            About Our Collection
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Crafted to Elevate Every Space
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a wide range of premium ceramic, porcelain, marble,
            and natural stone tiles designed to bring beauty, durability,
            and elegance to your home or commercial space. Every tile is
            carefully selected to ensure exceptional quality and timeless style.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Whether youre renovating a kitchen, upgrading a bathroom, or
            creating a luxurious living room, our collection offers the
            perfect solution to match your vision.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tiles"
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition"
            >
              Explore Collection
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LearnMore