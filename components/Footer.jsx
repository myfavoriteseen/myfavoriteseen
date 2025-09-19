export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6 mt-12">
      <p className="mb-4">© {new Date().getFullYear()} My Favorite Seen</p>
      <div className="space-x-4">
        <a href="https://youtube.com/@MyFavoriteSeen" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://tiktok.com/@myfavoriteseen" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://instagram.com/myfavoriteseen" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://pinterest.com/myfavoriteseen" target="_blank" rel="noopener noreferrer">Pinterest</a>
        <a href="https://facebook.com/myfavoriteseen" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://x.com/MyFavoriteSeen" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </footer>
  );
}