"use client";

import { useState } from "react";
import { ShoppingBag, X, Plus, Minus, Trash2, Check, Mail } from "lucide-react";
import { useCart, formatHUF } from "@/context/CartContext";

const EMAIL = "foglalas.henrysszombathely@gmail.com";

export default function Cart() {
  const { items, add, dec, remove, clear, totalQty, totalPrice, open, setOpen, hydrated } =
    useCart();

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickupTime: "",
    note: "",
  });

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push("Henry's Burger & Beer rendelés");
    lines.push("");
    if (form.name) lines.push(`Név: ${form.name}`);
    if (form.phone) lines.push(`Telefon: ${form.phone}`);
    if (form.pickupTime) lines.push(`Kért időpont: ${form.pickupTime}`);
    lines.push("");
    lines.push("Rendelés:");
    for (const i of items) {
      lines.push(`- ${i.qty}x ${i.name} — ${formatHUF(i.price * i.qty)}`);
    }
    lines.push("");
    lines.push(`Végösszeg: ${formatHUF(totalPrice)}`);
    if (form.note) {
      lines.push("");
      lines.push(`Megjegyzés: ${form.note}`);
    }
    return lines.join("\n");
  };

  const sendOrder = () => {
    if (!form.name.trim()) {
      alert("Kérlek add meg a nevedet!");
      return;
    }
    if (items.length === 0) return;
    const subject = encodeURIComponent(`Rendelés — ${form.name}`);
    const body = encodeURIComponent(buildMessage());
    const url = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => {
      clear();
      setOpen(false);
      setSent(false);
      setForm({ name: "", phone: "", pickupTime: "", note: "" });
    }, 2500);
  };

  return (
    <>
      {hydrated && totalQty > 0 && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 brand-gradient text-white rounded-full shadow-2xl shadow-pink/40 hover:scale-110 transition-transform flex items-center gap-3 px-6 py-4"
          aria-label="Kosár megnyitása"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="font-bold">{totalQty} tétel</span>
          <span className="text-sm opacity-90">· {formatHUF(totalPrice)}</span>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-5 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Kosár</h3>
              <p className="text-xs text-zinc-500">
                {totalQty === 0 ? "Üres" : `${totalQty} tétel`}
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {sent ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center mb-6 shadow-xl shadow-pink/30">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Rendelés elküldve!</h3>
            <p className="text-zinc-600">
              E-mailben megérkezett hozzánk. Hamarosan visszaigazoljuk
              telefonon.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Üres a kosarad</h3>
            <p className="text-zinc-600 mb-6">
              Nézz körül a menüben és rakj be pár finomságot!
            </p>
            <button
              onClick={() => setOpen(false)}
              className="brand-gradient text-white px-6 py-3 rounded-full font-semibold"
            >
              Menüre
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.map((i) => (
                <div
                  key={i.name}
                  className="flex gap-3 bg-zinc-50 rounded-2xl p-3"
                >
                  {i.image ? (
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 text-2xl">
                      🍔
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{i.name}</div>
                    <div className="text-sm text-pink-dark font-bold mt-0.5">
                      {formatHUF(i.price * i.qty)}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dec(i.name)}
                        className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:border-pink"
                        aria-label="Csökkentés"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-sm w-6 text-center">
                        {i.qty}
                      </span>
                      <button
                        onClick={() => add({ name: i.name, price: i.price, image: i.image })}
                        className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:border-pink"
                        aria-label="Növelés"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => remove(i.name)}
                        className="ml-auto text-zinc-400 hover:text-red-500 p-1"
                        aria-label="Eltávolítás"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-100 p-5 space-y-3">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Név *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-pink focus:outline-none text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-pink focus:outline-none text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Kért időpont"
                    value={form.pickupTime}
                    onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-pink focus:outline-none text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Megjegyzés (pl. extra sajt, nem csípős...)"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-pink focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-zinc-600">Végösszeg</span>
                <span className="text-2xl font-bold brand-text-gradient">
                  {formatHUF(totalPrice)}
                </span>
              </div>

              <button
                onClick={sendOrder}
                className="w-full flex items-center justify-center gap-3 brand-gradient text-white px-6 py-4 rounded-full font-bold shadow-xl shadow-pink/30 hover:scale-[1.02] transition-transform"
              >
                <Mail className="w-6 h-6" />
                Rendelés e-mailben
              </button>
              <p className="text-xs text-zinc-500 text-center">
                A gombra kattintva megnyílik a leveleződ előre kitöltött üzenettel.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
