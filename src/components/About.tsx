import { Sparkles, Heart, Beer, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Vadkovászos buci",
    desc: "A hamburger bucinkat vadkovászos módon, hagyományos eljárással készítjük — ropogós kívül, puha belül.",
  },
  {
    icon: Beer,
    title: "Kézműves sörök",
    desc: "Válogatott magyar craft sörök a Horizont Brewingtól és más hazai kis főzdéktől — mindig frissen csapolva.",
  },
  {
    icon: Heart,
    title: "Friss, helyi hozzávalók",
    desc: "A húst helyben daráljuk, a szószokat saját recept alapján készítjük. Nem gyártunk — főzünk.",
  },
  {
    icon: Users,
    title: "Családias hangulat",
    desc: "Baráti körrel, randira vagy családi vacsorára — Henry’s Szombathelyen mindig otthon érzed magad.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
              Rólunk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Korábban Guri, <br />
              <span className="brand-text-gradient italic" style={{ fontFamily: "var(--font-display)" }}>
                most Henry&apos;s
              </span>
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              A Henry&apos;s Burger &amp; Beer a korábbi Guri Serház folytatása
              Szombathelyen. Megmaradt minden, amit imádtál — a kézműves
              burgerek, a vadkovászos buci, a legfrissebb magyar craft sörök —
              csak új köntösben, új lendülettel.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              A húst helyben daráljuk, a bucikat nálunk kelesztjük, a szószokat
              saját recept alapján főzzük. Minden falat szenvedéllyel készül.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-gradient-to-br from-white to-pink-50/40 border border-zinc-100 rounded-3xl p-6 hover:border-pink/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center mb-4 shadow-lg shadow-pink/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
