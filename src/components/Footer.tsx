import { Phone, MapPin, Mail } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.07A4.93 4.93 0 1112 17a4.93 4.93 0 010-9.93zm0 8.13A3.2 3.2 0 1012 8.8a3.2 3.2 0 000 6.4zm6.28-8.33a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-3xl font-bold tracking-tight">
              <span
                className="text-white italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Henry&apos;s
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 ml-2">
                Burger &amp; Beer
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-xs">
              Vadkovászos kézműves burgerek és kézműves sörök Szombathelyen.
              Korábban Guri Serház néven.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/henrysszombathely"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink hover:scale-110 transition-all flex items-center justify-center"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/guri_serhaz_szombathely/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink hover:scale-110 transition-all flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400 mb-4">
              Menü
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Kézműves Burgerek</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Különlegességek</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Köretek &amp; Snackek</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Italok</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400 mb-4">
              Kapcsolat
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+3694367781" className="flex items-center gap-3 text-zinc-300 hover:text-pink-light transition-colors">
                  <Phone className="w-4 h-4 text-pink" />
                  +36 94 367 781
                </a>
              </li>
              <li>
                <a href="mailto:foglalas.henrysszombathely@gmail.com" className="flex items-start gap-3 text-zinc-300 hover:text-pink-light transition-colors">
                  <Mail className="w-4 h-4 text-pink shrink-0 mt-0.5" />
                  <span className="break-all">foglalas.henrysszombathely@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-pink" />
                Szent Erzsébet tér 1, Szombathely
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Henry&apos;s Burger &amp; Beer Szombathely. Minden jog fenntartva.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-light transition-colors">Adatvédelem</a>
            <a href="#" className="hover:text-pink-light transition-colors">ÁSZF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
