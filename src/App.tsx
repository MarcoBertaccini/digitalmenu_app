import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './pages/Menu';
import Promo from './pages/Promo';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="max-w-md mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
