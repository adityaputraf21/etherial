import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // tambahkan ini

const navLinks = [
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Sistem House', href: '#houses' },
  { name: 'Program Kelas', href: '#programs' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // inisialisasi

  const handleNavigateLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="text-yellow-400 w-8 h-8" />
          <h1 className="text-xl font-bold text-white font-serif tracking-wider">
            ETHERIAL ACADEMY
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-yellow-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Tombol Masuk Desktop */}
        <a
          href="#"
          onClick={handleNavigateLogin}
          className="hidden md:inline-block bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
        >
          Masuk / Daftar
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-900">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => {
                handleNavigateLogin(e);
                setIsOpen(false);
              }}
              className="w-full text-center bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Masuk / Daftar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
