export default function Features() {
  return (
    <section  className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div id="features" className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold">Fast Performance</h3>
          <p className="mt-3 text-gray-300">Lightning-fast load time & smooth experience.</p>
        </div>

        <div id="features"  className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold">Smart Automation</h3>
          <p className="mt-3 text-gray-300">Automate workflow to save time & boost efficiency.</p>
        </div>

        <div id="features" className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold">Secure & Reliable</h3>
          <p className="mt-3 text-gray-300">Enterprise-level security and data protection.</p>
        </div>
      </div>
    </section>
  );
}
