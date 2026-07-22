import Link from "next/link";

const NotFound =() => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6">
      <div className="text-center max-w-xl">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-7">
          Sorry, the page youre looking for doesnt exist or has been moved.
          Lets get you back to learning.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            🏠 Back to Home
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            📚 Browse Courses
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-gray-500">
          LearnSphere • Learn Today. Lead Tomorrow.
        </p>
      </div>
    </section>
  );
}
export default NotFound