import { useState, useEffect } from 'react';
import { fetchMenu } from '../config/airtable';
import MenuCard from '../components/MenuCard';
import { Filter } from 'lucide-react';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    setLoading(true);
    const items = await fetchMenu();
    setMenuItems(items);
    setLoading(false);
  };

  const categories = ['Tutti', ...new Set(menuItems.map((item) => item.category))];

  const filteredItems =
    selectedCategory === 'Tutti'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Caricamento menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-purple-400" />
        <h2 className="text-lg font-semibold text-white">Filtra per categoria</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              selectedCategory === category
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">Nessun elemento disponibile in questa categoria</p>
          </div>
        )}
      </div>
    </div>
  );
}
