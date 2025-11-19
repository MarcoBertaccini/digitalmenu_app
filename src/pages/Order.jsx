import { useState } from 'react';
import { ShoppingCart, Check, Send } from 'lucide-react';

export default function Order() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSent(true);

      setTimeout(() => {
        setOrderSent(false);
      }, 3000);
    }, 2000);
  };

  if (orderSent) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Check size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Richiesta Inviata!</h3>
          <p className="text-gray-400">Il nostro staff ti assisterà a breve</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-600 rounded-2xl">
          <ShoppingCart size={28} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Ordinazione Rapida</h2>
          <p className="text-gray-400 text-sm">Invia la tua richiesta allo staff</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-purple-900/20 shadow-xl">
        <div className="space-y-6">
          <div className="bg-purple-900/20 rounded-2xl p-5 border border-purple-700/30">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Come funziona
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Clicca sul pulsante "Invia Richiesta" qui sotto</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Il nostro staff riceverà immediatamente la notifica</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Un membro del team verrà da te per prendere l'ordine</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-500 mb-1">Servizio:</p>
              <p className="text-white font-medium">Assistenza Personale</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-500 mb-1">Tempo di attesa stimato:</p>
              <p className="text-purple-400 font-medium">2-5 minuti</p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-purple-600/50 disabled:shadow-none flex items-center justify-center gap-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Invio in corso...</span>
              </>
            ) : (
              <>
                <Send size={24} />
                <span>Invia Richiesta</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <h4 className="text-white font-semibold mb-3 text-sm">Informazioni Importanti</h4>
        <ul className="space-y-2 text-gray-400 text-xs">
          <li className="flex gap-2">
            <span className="text-purple-400">ℹ</span>
            <span>Questa funzione invia solo una notifica al personale</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">ℹ</span>
            <span>Non viene effettuato alcun pagamento tramite l'app</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">ℹ</span>
            <span>Il pagamento avverrà direttamente con lo staff</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
