import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#8B0A1F]">
      <div className="absolute inset-0 -z-0">
        <video
          src="/hero-video-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        <div className="absolute inset-0 bg-[#8B0A1F]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Szombathely · ex Guri Serház
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white drop-shadow-xl">
              <span
                className="block italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vadkovászos
              </span>
              <span
                className="block italic text-white/95 pb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Burger &amp; Beer
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed mx-auto lg:mx-0 drop-shadow-md">
              Henry&apos;s Szombathelyen — a város legjobb kézműves söreivel és
              vadkovászos bucijában tálalt hamburgereivel várunk titeket.
              Gyere be, vagy rendelj házhoz!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-white text-[#C8102E] px-7 py-4 rounded-full text-base font-bold shadow-xl hover:scale-105 transition-all"
              >
                Menü megtekintése
              </a>
              <a
                href="tel:+3694367781"
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Foglalás telefonon
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/90 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Szent Erzsébet tér 1, Szombathely
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +36 94 367 781
              </div>
            </div>
          </div>

          <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[9/16] max-w-sm mx-auto">
              <div className="absolute inset-0 bg-black rounded-[3rem] rotate-6 opacity-30 blur-2xl" />
              <div className="relative bg-[#C8102E] rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white/90">
                <div className="relative aspect-[9/16]">
                  <img
                    src="/henrys-logo.jpg"
                    alt="Henry's Burger & Beer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider rotate-12 shadow-xl">
                Ex Guri!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
