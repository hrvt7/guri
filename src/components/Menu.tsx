"use client";

import { useState } from "react";
import { Flame, Star, Plus, Check } from "lucide-react";
import { useCart, formatHUF } from "@/context/CartContext";

type Item = {
  name: string;
  desc: string;
  price: number;
  badge?: string;
  emoji: string;
  video?: string;
  image?: string;
};

const categories: { id: string; title: string; subtitle: string; items: Item[] }[] = [
  {
    id: "burgers",
    title: "Kézműves Burgerek",
    subtitle: "Vadkovászos bucipuhában, friss marhahúsból",
    items: [
      { name: "Tricky Burger", desc: "Havi új burgerünk — rántott Camembert, friss saláták, Horizont sör-ajánlóval", emoji: "🍔", badge: "Új!", image: "/menu/tricky-burger.webp", price: 4990 },
      { name: "Cheeseburger", desc: "Klasszikus cheeseburger cheddarral, saláta, paradicsom, lilahagyma, Guri szósz", emoji: "🍔", badge: "Kedvenc", image: "/menu/cheeseburger.webp", price: 3190 },
      { name: "Cheap Jason Burger", desc: "Egyszerű, de annál finomabb — olcsón a legjobb cheeseburger élmény", emoji: "🍔", image: "/menu/cheap-jason.webp", price: 3290 },
      { name: "Cheese Lover Burger", desc: "Sajtimádóknak — tripla cheddar, füstölt sajt, sajtszósz", emoji: "🧀", image: "/menu/cheese-lover.webp", price: 3890 },
      { name: "Dupla Bacon Burger", desc: "Dupla húspogácsa, ropogós bacon, karamellizált hagyma, BBQ", emoji: "🥓", image: "/menu/dupla-bacon.webp", price: 4290 },
      { name: "Brutal Double Burger", desc: "Dupla smash húspogácsa, dupla cheddar, házi szósz — a brutális kedvenc", emoji: "💪", image: "/menu/brutal-double.webp", price: 4690 },
      { name: "Vega Burger", desc: "Házi zöldségburger, grillezett zöldségek, hummusz, friss saláták", emoji: "🥗", image: "/menu/vega-burger.webp", price: 3490 },
      { name: "Cheddar Madness Burger", desc: "Olvadt cheddar bomba, ropogós hagyma, csípős szósz", emoji: "🧀", image: "/menu/cheddar-madness.webp", price: 3990 },
      { name: "Pulled Pork Burger", desc: "12 órán át sült tépett sertés, coleslaw, BBQ szósz", emoji: "🐖", image: "/menu/pulled-pork.webp", price: 3990 },
      { name: "Molotov Burger", desc: "Robbanóan csípős — jalapeño, chipotle mayo, csípős cheddar", emoji: "💥", badge: "Csípős", image: "/menu/molotov.webp", price: 3890 },
      { name: "Jalapeno Burger", desc: "Jalapeño karikák, pepperoni, csípős szósz, cheddar", emoji: "🌶️", badge: "Csípős", image: "/menu/jalapeno-burger.webp", price: 3790 },
      { name: "Chicken Burger", desc: "Ropogós rántott csirkemell, coleslaw, honey-mustard", emoji: "🍗", image: "/menu/chicken-burger.webp", price: 2990 },
    ],
  },
  {
    id: "extra",
    title: "Különlegességek",
    subtitle: "A menü sztárjai, amiket muszáj kipróbálnod",
    items: [
      { name: "Rántott Camembert áfonyával", desc: "Ropogós bundában sült Camembert, házi áfonyalekvárral", emoji: "🧀", image: "/menu/camembert.webp", price: 3890 },
      { name: "Házi Túrófánk", desc: "Málnaszósszal és friss gyümölcsökkel — édes lezárás", emoji: "🍩", image: "/menu/turofank.webp", price: 1990 },
    ],
  },
  {
    id: "sides",
    title: "Köretek & Snackek",
    subtitle: "Ropogós, frissen sütött kiegészítők",
    items: [
      { name: "Csónakburgonya", desc: "Ropogós, héjában sült burgonyaszeletek, válogatott szószokkal", emoji: "🥔", image: "/menu/csonakburgonya.webp", price: 1290 },
      { name: "Hagymakarika", desc: "Ropogós, bundázott hagymakarikák", emoji: "🧅", image: "/menu/hagymakarika.webp", price: 1690 },
      { name: "Jalapeno Poppers", desc: "Sajttal töltött, rántott jalapeño falatok", emoji: "🌶️", image: "/menu/jalapeno-poppers.webp", price: 1890 },
      { name: "Coleslaw Saláta", desc: "Frissítő, krémes káposztasaláta — tökéletes burgerhez", emoji: "🥗", image: "/menu/coleslaw.webp", price: 990 },
    ],
  },
  {
    id: "drinks",
    title: "Italok",
    subtitle: "Kézműves sörök és frissítők",
    items: [
      { name: "Coca-Cola", desc: "Klasszikus Coca-Cola 0.33L", emoji: "🥤", image: "/menu/coca-cola.webp", price: 840 },
      { name: "Red Bull", desc: "Red Bull energiaital 0.25L", emoji: "⚡", image: "/menu/redbull.webp", price: 1240 },
    ],
  },
];

function AddButton({ item, size = "md" }: { item: Item; size?: "sm" | "md" }) {
  const { add, items } = useCart();
  const inCart = items.find((i) => i.name === item.name);
  const [clicked, setClicked] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    add({ name: item.name, price: item.price, image: item.image });
    setClicked(true);
    setTimeout(() => setClicked(false), 900);
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all shrink-0 ${
        clicked
          ? "bg-green-500 text-white"
          : "brand-gradient text-white hover:scale-105"
      } ${size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
      aria-label={`${item.name} kosárba`}
    >
      {clicked ? (
        <Check className="w-4 h-4" strokeWidth={3} />
      ) : (
        <Plus className="w-4 h-4" strokeWidth={3} />
      )}
      {clicked ? "Hozzáadva" : inCart ? `${inCart.qty} a kosárban` : "Kosárba"}
    </button>
  );
}

function MediaBlock({ item }: { item: Item }) {
  if (item.image) {
    return (
      <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="relative w-full aspect-[4/5] bg-zinc-50 flex items-center justify-center text-7xl">
      {item.emoji}
    </div>
  );
}

function Card({ item, mobile }: { item: Item; mobile?: boolean }) {
  return (
    <article
      className={`group relative bg-white rounded-3xl border border-zinc-100 overflow-hidden flex flex-col transition-all ${
        mobile
          ? "shadow-sm shrink-0 w-[75vw] max-w-[320px] snap-start"
          : "hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10"
      }`}
    >
      {item.badge && (
        <div className="absolute top-3 right-3 z-10 brand-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          {item.badge}
        </div>
      )}

      <MediaBlock item={item} />

      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-lg font-bold text-black mb-1.5">{item.name}</h4>
        <p className="text-sm text-zinc-600 leading-relaxed flex-1">
          {item.desc}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-bold brand-text-gradient">
            {formatHUF(item.price)}
          </span>
          <AddButton item={item} size={mobile ? "sm" : "md"} />
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            Menünk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Amit{" "}
            <span
              className="brand-text-gradient italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              szeretni
            </span>{" "}
            fogsz
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Vadkovászos bucipuhában tálalt, friss marhahúsos burgereink
            mindennap kézzel készülnek. Rakd össze a rendelésed és küldd el
            e-mailben pár kattintással.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {cat.title}
                </h3>
                <p className="mt-2 text-zinc-600">{cat.subtitle}</p>
                <div className="mt-4 h-1 w-20 brand-gradient rounded-full" />
              </div>

              <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {cat.items.map((item) => (
                  <Card key={item.name + "-m"} item={item} mobile />
                ))}
                <div className="shrink-0 w-1" aria-hidden />
              </div>

              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
