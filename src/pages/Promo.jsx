import { useState, useEffect } from 'react';
import { fetchPromo } from '../config/airtable';
import { Sparkles, Tag } from 'lucide-react';

export default function Promo() {
  const [promo, setPromo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPromo();
  }, []);

  const loadPromo = async () => {
    setLoading(true);
    const promoData = await fetchPromo();
    setPromo(promoData);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Caricamento promo...</p>
        </div>
      </div>
    );
  }

  if (!promo) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Sparkles size={48} className="text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">Nessuna promo disponibile al momento</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-600 rounded-2xl">
          <Sparkles size={28} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Promo del Giorno</h2>
          <p className="text-gray-400 text-sm">Non perdere l'offerta speciale di oggi</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-900/40 via-gray-900 to-pink-900/40 rounded-3xl p-6 border border-purple-600/30 shadow-2xl shadow-purple-600/20">
        {promo.immagine && (
          <div className="w-full h-64 rounded-2xl mb-6 overflow-hidden">
            <img
              src={promo.immagine}
              alt={promo.titolo}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Tag size={20} className="text-purple-400" />
            <h3 className="text-2xl font-bold text-white">{promo.titolo}</h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">{promo.descrizione}</p>

          <div className="mt-6 pt-6 border-t border-purple-900/50">
            <div className="flex items-center justify-center gap-2 text-purple-400 animate-pulse">
              <Sparkles size={20} />
              <span className="font-semibold">Offerta Limitata</span>
              <Sparkles size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <h4 className="text-white font-semibold mb-3">Come approfittarne?</h4>
        <ol className="space-y-2 text-gray-400 text-sm">
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">1.</span>
            <span>Mostra questa schermata al personale</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">2.</span>
            <span>Richiedi la promo del giorno</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">3.</span>
            <span>Goditi la tua offerta speciale</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
