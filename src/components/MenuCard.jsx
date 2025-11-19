export default function MenuCard({ item }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-900/20 hover:border-purple-600/50 transition-all shadow-lg hover:shadow-purple-600/20">

      {item.immagine && (
        <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
          <img
            src={item.immagine}
            alt={item.nome}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{item.nome}</h3>
        <span className="text-xl font-bold text-purple-400 ml-3">
          €{typeof item.prezzo === 'number' ? item.prezzo.toFixed(2) : item.prezzo}
        </span>
      </div>

      {item.descrizione && (
        <p className="text-gray-400 text-sm mb-3">{item.descrizione}</p>
      )}

      <div className="flex items-center justify-between">
        <span className="text-xs px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/50">
          {item.categoria}
        </span>
      </div>
    </div>
  );
}
