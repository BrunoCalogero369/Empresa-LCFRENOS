import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WabcoProducts from './pages/WabcoProducts';
import KnorrProducts from './pages/KnorrProducts';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wabco" element={<WabcoProducts />} />
        <Route path="/knorr" element={<KnorrProducts/>}/>
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
