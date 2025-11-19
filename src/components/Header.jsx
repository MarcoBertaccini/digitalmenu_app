import { Link, useLocation } from 'react-router-dom';
import { Menu, Sparkles, ShoppingCart } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-purple-900/30">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Zenith Digital Menu
          </h1>
        </div>

        <nav className="flex gap-2">
          <Link
            to="/"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
              isActive('/')
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Menu size={18} />
            <span className="text-sm">Menu</span>
          </Link>

          <Link
            to="/promo"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
              isActive('/promo')
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Sparkles size={18} />
            <span className="text-sm">Promo</span>
          </Link>

          <Link
            to="/order"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
              isActive('/order')
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            <ShoppingCart size={18} />
            <span className="text-sm">Ordina</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
