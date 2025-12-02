export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Loved by Teams Worldwide</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        <div id="test"
          className="p-6 bg-white/10 rounded-xl shadow-lg border border-white/10">
          <p className="text-gray-300 italic">
            “The best platform we've used — improved productivity by 200%!”
          </p>
          <h3 className="mt-4 font-semibold text-white">— Ankit Verma, CTO</h3>
        </div>

        <div id="test" className="p-6 bg-white/10 rounded-xl shadow-lg border border-white/10">
          <p className="text-gray-300 italic">
            “Amazing support & world-class performance!”
          </p>
          <h3 className="mt-4 font-semibold text-white">— Priya Sharma, Product Lead</h3>
        </div>
      </div>
    </section>
  );
}
