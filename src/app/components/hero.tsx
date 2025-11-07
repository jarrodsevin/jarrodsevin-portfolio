export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl md:text-7xl font-bold tracking-wide animate-fade-in">
        Jarrod Sevin
      </h1>
      <p className="mt-4 text-lg md:text-xl text-purple-300">
        A Collection of Projects
      </p>
      <button className="mt-8 px-6 py-3 border border-purple-500 text-purple-300 rounded hover:bg-purple-500 hover:text-white transition">
        Explore the Work
      </button>
    </section>
  )
}