import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Услуги", "О нас", "Портфолио", "Контакты"];

const SERVICES = [
  {
    icon: "Layers",
    title: "Веб-дизайн",
    desc: "Создаём уникальные интерфейсы, которые говорят о вашем бренде без слов. Каждый пиксель — намеренный.",
  },
  {
    icon: "Code2",
    title: "Разработка",
    desc: "Чистый, масштабируемый код. Быстрые сайты и приложения, которые работают безупречно на всех устройствах.",
  },
  {
    icon: "TrendingUp",
    title: "Стратегия",
    desc: "Анализируем аудиторию, выстраиваем воронку и превращаем посетителей в лояльных клиентов.",
  },
  {
    icon: "Sparkles",
    title: "Брендинг",
    desc: "Визуальная идентичность, которая остаётся в памяти. Логотип, типографика, цвета — единая система.",
  },
];

const WORKS = [
  { label: "Проектов", value: "120+" },
  { label: "Лет опыта", value: "8" },
  { label: "Клиентов", value: "94%" },
  { label: "Наград", value: "12" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-coal font-body text-cream overflow-x-hidden">

      {/* ─── Декоративный фон ─── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[100px]" />
        {/* Тонкая сетка */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ─── Навигация ─── */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-16 py-6 border-b border-gold/10">
        <a href="#" className="font-display text-2xl font-light tracking-[0.15em] text-cream">
          СТУДИЯ
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 text-sm tracking-widest text-cream/60">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="relative group uppercase text-xs tracking-[0.2em] hover:text-gold transition-colors duration-300"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-6 py-2.5 hover:bg-gold hover:text-coal transition-all duration-300">
          Связаться
        </button>

        {/* Mobile burger */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-40 bg-coal-mid border-b border-gold/10 px-6 py-6 flex flex-col gap-4 md:hidden animate-fade-in">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-6 py-2.5 hover:bg-gold hover:text-coal transition-all duration-300 self-start">
            Связаться
          </button>
        </div>
      )}

      {/* ─── Hero ─── */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-16">
        {/* Тег */}
        <div
          className="mb-10 inline-flex items-center gap-3 border border-gold/30 px-5 py-2 text-gold/80 text-xs tracking-[0.25em] uppercase opacity-0"
          style={{ animation: "fade-in 0.8s ease-out 0.2s forwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Цифровая студия · Москва
        </div>

        {/* Заголовок */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-[110px] font-light leading-[0.9] tracking-tight opacity-0 max-w-5xl"
          style={{ animation: "fade-in 0.9s ease-out 0.4s forwards" }}
        >
          Создаём<br />
          <em className="not-italic text-gold">цифровое</em><br />
          присутствие
        </h1>

        {/* Линия */}
        <div
          className="my-10 w-0 h-px bg-gold/40 opacity-0"
          style={{ animation: "line-grow 1s ease-out 0.9s forwards, fade-in-slow 0.1s 0.9s forwards" }}
        />

        {/* Подзаголовок */}
        <p
          className="max-w-lg text-cream/60 text-lg leading-relaxed opacity-0"
          style={{ animation: "fade-in 0.8s ease-out 1.1s forwards" }}
        >
          Мы объединяем стратегию, дизайн и технологии, чтобы ваш бренд
          занял достойное место в цифровом пространстве.
        </p>

        {/* CTA */}
        <div
          className="mt-12 flex flex-wrap gap-4 justify-center opacity-0"
          style={{ animation: "fade-in 0.8s ease-out 1.3s forwards" }}
        >
          <button className="bg-gold text-coal text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300 font-medium">
            Начать проект
          </button>
          <button className="border border-cream/20 text-cream/70 text-sm tracking-[0.15em] uppercase px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300">
            Смотреть работы
          </button>
        </div>

        {/* Скролл-индикатор */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: "fade-in 1s ease-out 1.8s forwards" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30">Скролл</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-float" />
        </div>
      </section>

      {/* ─── Статистика ─── */}
      <section className="relative z-10 border-y border-gold/10 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {WORKS.map((w, i) => (
            <div
              key={w.label}
              className="text-center opacity-0"
              style={{ animation: `fade-in 0.7s ease-out ${0.1 * i + 0.3}s forwards` }}
            >
              <div className="font-display text-5xl md:text-6xl font-light text-gold">{w.value}</div>
              <div className="mt-1 text-xs tracking-[0.2em] uppercase text-cream/40">{w.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Услуги ─── */}
      <section className="relative z-10 py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Заголовок блока */}
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">— Что мы делаем</p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
                Полный<br />спектр услуг
              </h2>
            </div>
            <p className="max-w-xs text-cream/50 text-sm leading-relaxed">
              От стратегии до запуска — берём на себя все этапы создания вашего цифрового продукта.
            </p>
          </div>

          {/* Карточки */}
          <div className="grid md:grid-cols-2 gap-px bg-gold/10">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="group bg-coal p-10 hover:bg-coal-light transition-colors duration-500 cursor-default opacity-0"
                style={{ animation: `fade-in 0.7s ease-out ${0.15 * i + 0.2}s forwards` }}
              >
                <div className="mb-6 w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Icon name={s.icon} fallback="Sparkles" size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-gold/0 group-hover:text-gold/70 transition-all duration-300 text-xs tracking-widest uppercase">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Цитата / философия ─── */}
      <section className="relative z-10 py-24 px-6 md:px-16 border-y border-gold/10 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[200px] font-light text-gold/3 select-none leading-none pointer-events-none">
          &ldquo;
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <blockquote className="font-display text-3xl md:text-4xl font-light leading-relaxed text-cream/90 italic">
            «Хороший дизайн — это не то, как вещь выглядит,
            а то, как она работает.»
          </blockquote>
          <cite className="mt-6 block text-xs tracking-[0.3em] uppercase text-gold/60 not-italic">
            — Стив Джобс
          </cite>
        </div>
      </section>

      {/* ─── Контакты ─── */}
      <section className="relative z-10 py-28 px-6 md:px-16" id="contact">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Левый блок */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">— Начнём?</p>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
              Расскажите<br />о проекте
            </h2>
            <p className="text-cream/50 text-sm leading-relaxed mb-10">
              Опишите вашу задачу — мы свяжемся в течение одного рабочего дня и предложим
              оптимальное решение.
            </p>

            <div className="space-y-5">
              {[
                { icon: "Mail", label: "hello@studio.ru" },
                { icon: "Phone", label: "+7 (999) 000-00-00" },
                { icon: "MapPin", label: "Москва, Россия" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 text-cream/60 text-sm hover:text-gold transition-colors cursor-pointer group">
                  <div className="w-9 h-9 border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    <Icon name={c.icon} fallback="Circle" size={15} className="text-gold/60 group-hover:text-gold transition-colors" />
                  </div>
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Форма */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {[
              { id: "name", label: "Ваше имя", type: "text", placeholder: "Иван Иванов" },
              { id: "email", label: "Email", type: "email", placeholder: "ivan@company.ru" },
            ].map((f) => (
              <div key={f.id} className="relative group">
                <label className="block text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-2">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3.5 text-sm text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/60 hover:border-gold/35 transition-colors duration-300"
                  value={formData[f.id as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
                />
              </div>
            ))}

            <div className="relative">
              <label className="block text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-2">
                Сообщение
              </label>
              <textarea
                rows={5}
                placeholder="Расскажите о вашем проекте..."
                className="w-full bg-transparent border border-gold/20 px-4 py-3.5 text-sm text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/60 hover:border-gold/35 transition-colors duration-300 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-coal text-xs tracking-[0.25em] uppercase py-4 font-medium hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Отправить заявку
              <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-gold/10 py-8 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg tracking-[0.15em] text-cream/40">СТУДИЯ</span>
          <p className="text-[11px] tracking-[0.15em] text-cream/25 uppercase">
            © {new Date().getFullYear()} — Все права защищены
          </p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "Behance"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[11px] tracking-[0.15em] uppercase text-cream/30 hover:text-gold transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}