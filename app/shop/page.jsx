export default function Shop() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Shop</h1>
      <p className="text-lg text-gray-300 mb-8">
        Discover clothing, props, and decor inspired by your favorite movie scenes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Example Item</h2>
          <p className="text-gray-400 mb-2">Movie-inspired outfit or prop.</p>
          <a href="#" className="text-blue-400 hover:underline">Buy on Amazon</a>
        </div>
      </div>
    </section>
  );
}