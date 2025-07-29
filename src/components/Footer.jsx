import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
        <div className="container mx-auto px-6 py-8 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
                <Shield className="text-yellow-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-serif tracking-wider">ETHERIAL ACADEMY</h3>
            </div>
            <p>&copy; {new Date().getFullYear()} Etherial Academy. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;