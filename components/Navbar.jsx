import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 shadow">
      <Link href="/" className="text-2xl font-bold">My Favorite Seen</Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/shop" className="hover:text-gray-400">Shop</Link>
      </div>
    </nav>
  );
}