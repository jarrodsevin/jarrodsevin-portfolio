'use client'

export default function ProjectGrid() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Explore the Work</h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards — replace with real project data */}
        <div className="bg-[#1F1F2E] rounded-lg p-6 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Project One</h3>
          <p className="text-sm text-gray-300">Brief description of the first project goes here.</p>
        </div>
        <div className="bg-[#1F1F2E] rounded-lg p-6 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Project Two</h3>
          <p className="text-sm text-gray-300">Brief description of the second project goes here.</p>
        </div>
        <div className="bg-[#1F1F2E] rounded-lg p-6 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Project Three</h3>
          <p className="text-sm text-gray-300">Brief description of the third project goes here.</p>
        </div>
      </div>
    </section>
  )
}