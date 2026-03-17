import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
              MABI
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Moving Ahead by Innovation. <br/>
              Kompleksowa platforma biznesowa napędzana sztuczną inteligencją.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Produkt</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#features" className="hover:text-white transition-colors">Funkcje</Link></li>
              <li><Link href="/cennik" className="hover:text-white transition-colors">Cennik</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dokumentacja</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Firma</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kariera</Link></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Regulamin</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Polityka prywatności</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">RODO</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 SALAG Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          <p>Designed for Manufacturing.</p>
        </div>
      </div>
    </footer>
  );
}
