export default function Hero() {
  return (
    <section className="h-[85vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-600/30 to-transparent px-6">
      <h1 id="heading" className="text-6xl font-extrabold drop-shadow-lg">
        Elevate Your Digital Experience
      </h1>
      <p className="mt-4 text-lg max-w-2xl text-gray-300">
        A next-gen platform to build, launch, and scale products with speed and precision.
      </p>

      <button className="mt-8 px-10 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-lg font-semibold shadow-lg transition transform hover:scale-105">
        Start Free Trial
      </button>
    </section>
  );
}
