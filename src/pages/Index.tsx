import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── Данные ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Квартиры", href: "#apartments" },
  { label: "Города", href: "#cities" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const CITIES = [
  {
    id: "sochi",
    name: "Сочи",
    icon: "Sun",
    desc: "Морское побережье, горы и круглогодичный отдых",
    count: 50,
    img: "https://images.unsplash.com/photo-1596394723269-b3f33e6f4f66?w=600&q=80",
  },
  {
    id: "moscow",
    name: "Москва",
    icon: "Building2",
    desc: "Деловой центр страны с бесконечными возможностями",
    count: 7,
    img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80",
  },
  {
    id: "spb",
    name: "Санкт-Петербург",
    icon: "Landmark",
    desc: "Северная столица с уникальной атмосферой и историей",
    count: 33,
    img: "https://images.unsplash.com/photo-1548834925-e48f8a1571c1?w=600&q=80",
  },
];

const APARTMENTS = [
  {
    id: 1,
    city: "sochi",
    cityName: "Сочи",
    title: "Студия у моря",
    area: 32,
    floor: 5,
    beds: 1,
    price: 3200,
    rating: 4.9,
    reviews: 87,
    tags: ["Море 5 мин", "Wi-Fi", "Кондиционер"],
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    id: 2,
    city: "sochi",
    cityName: "Сочи",
    title: "Апартаменты с видом на горы",
    area: 55,
    floor: 8,
    beds: 2,
    price: 5500,
    rating: 4.8,
    reviews: 62,
    tags: ["Горный вид", "Парковка", "Wi-Fi"],
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    id: 3,
    city: "moscow",
    cityName: "Москва",
    title: "Квартира в центре",
    area: 48,
    floor: 3,
    beds: 1,
    price: 4800,
    rating: 4.7,
    reviews: 114,
    tags: ["Центр", "Метро 3 мин", "Wi-Fi"],
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    id: 4,
    city: "moscow",
    cityName: "Москва",
    title: "Просторные апартаменты",
    area: 72,
    floor: 12,
    beds: 2,
    price: 7200,
    rating: 5.0,
    reviews: 49,
    tags: ["Панорамный вид", "Джакузи", "Парковка"],
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
  },
  {
    id: 5,
    city: "spb",
    cityName: "Санкт-Петербург",
    title: "Квартира у Невского",
    area: 44,
    floor: 4,
    beds: 1,
    price: 4200,
    rating: 4.8,
    reviews: 93,
    tags: ["Невский проспект", "Исторический центр", "Wi-Fi"],
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
  },
  {
    id: 6,
    city: "spb",
    cityName: "Санкт-Петербург",
    title: "Уютная студия на Петроградке",
    area: 36,
    floor: 2,
    beds: 1,
    price: 3600,
    rating: 4.6,
    reviews: 71,
    tags: ["Петроградская сторона", "Парк рядом", "Wi-Fi"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
];

const ADVANTAGES = [
  {
    icon: "ShieldCheck",
    title: "Проверенное жильё",
    desc: "Каждая квартира проходит личный осмотр нашими менеджерами перед публикацией",
  },
  {
    icon: "Banknote",
    title: "Без скрытых платежей",
    desc: "Цена, которую вы видите — это финальная цена. Никаких дополнительных комиссий",
  },
  {
    icon: "Clock",
    title: "Заезд 24/7",
    desc: "Гибкое время заезда и выезда",
  },
  {
    icon: "Headphones",
    title: "Поддержка всегда",
    desc: "Личный менеджер сопровождает вас от бронирования до выезда",
  },
  {
    icon: "Award",
    title: "5 лет на рынке",
    desc: "Более 10 000 успешных заездов и 98% довольных гостей",
  },
  {
    icon: "CalendarCheck",
    title: "Мгновенное подтверждение",
    desc: "Бронирование онлайн — получите подтверждение за несколько секунд",
  },
];

const REVIEWS = [
  {
    name: "Анна К.",
    city: "Сочи",
    rating: 5,
    text: "Невероятная квартира с видом на море! Всё как на фото, даже лучше. Менеджер встретила нас в 2 ночи без вопросов. Обязательно вернёмся!",
    date: "Март 2024",
    avatar: "A",
  },
  {
    name: "Дмитрий П.",
    city: "Москва",
    rating: 5,
    text: "Брал квартиру в центре Москвы на деловую поездку. Всё чисто, уютно, есть всё необходимое. Расположение идеальное — до метро пешком.",
    date: "Февраль 2024",
    avatar: "Д",
  },
  {
    name: "Мария С.",
    city: "Санкт-Петербург",
    rating: 5,
    text: "Провели романтические выходные в Питере. Квартира просто сказочная — высокие потолки, лепнина, вид на канал. Спасибо Orange Apart!",
    date: "Январь 2024",
    avatar: "М",
  },
  {
    name: "Игорь В.",
    city: "Сочи",
    rating: 4,
    text: "Отличное жильё для семейного отдыха. Двухкомнатная, всё чисто, хорошая кухня. До пляжа 7 минут пешком. Цена абсолютно справедливая.",
    date: "Декабрь 2023",
    avatar: "И",
  },
];

const STATS = [
  { value: "98%", label: "Довольных гостей" },
  { value: "10K+", label: "Заездов завершено" },
  { value: "3", label: "Города присутствия" },
  { value: "5 лет", label: "На рынке аренды" },
];

// ─── Компонент ─────────────────────────────────────────────────────────────────

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCity, setActiveCity] = useState<string>("all");
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const filteredApartments =
    activeCity === "all"
      ? APARTMENTS
      : APARTMENTS.filter((a) => a.city === activeCity);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const body = `Новая заявка с сайта OrangeApart%0A%0AИмя: ${encodeURIComponent(formData.name)}%0AТелефон: ${encodeURIComponent(formData.phone)}%0AГород: ${encodeURIComponent(formData.city)}%0AСообщение: ${encodeURIComponent(formData.message)}`;
      await fetch(`https://formsubmit.co/ajax/orangeapart@mail.ru`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          message: formData.message,
          _subject: "Новая заявка с сайта OrangeApart",
          _captcha: "false",
        }),
      });
      setFormStatus("sent");
      setFormData({ name: "", phone: "", city: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-body text-dark overflow-x-hidden">

      {/* ─── Шапка навигации ─── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Логотип */}
            <a href="#" className="flex items-center gap-2.5 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center group-hover:bg-orange-dark transition-colors duration-200">
                <Icon name="Home" size={16} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-800 text-lg tracking-tight text-dark">
                  Orange<span className="text-orange">Apart</span>
                </span>
                <span className="text-[9px] tracking-widest uppercase text-slate font-medium">Аренда квартир</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-dark/70 hover:text-orange transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+79002379757" className="flex items-center gap-2 text-sm font-medium text-dark/70 hover:text-orange transition-colors">
                <Icon name="Phone" size={15} />
                8(900) 237-97-57
              </a>
              <button
                onClick={() => scrollTo("#apartments")}
                className="bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-dark transition-colors duration-200"
              >
                Забронировать
              </button>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-dark rounded-lg hover:bg-slate-light transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-dark/70 hover:text-orange hover:bg-orange-pale rounded-lg transition-colors"
              >
                {l.label}
              </button>
            ))}
            <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a href="tel:+79002379757" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-dark/70">
                <Icon name="Phone" size={15} className="text-orange" />
                8(900) 237-97-57
              </a>
              <button
                onClick={() => { scrollTo("#apartments"); setMenuOpen(false); }}
                className="bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-dark transition-colors text-center"
              >
                Забронировать
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-dark via-dark-mid to-dark-light overflow-hidden min-h-[92vh] flex items-center">
        {/* Фоновый паттерн */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 40%, #FF6B35 0%, transparent 50%), radial-gradient(circle at 75% 60%, #FF8C5A 0%, transparent 50%)"
          }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Левая колонка — текст */}
            <div>
              <div
                className="inline-flex items-center gap-2 bg-orange/20 border border-orange/30 text-orange text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-8 opacity-0"
                style={{ animation: "fade-in 0.6s ease-out 0.2s forwards" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                Посуточная аренда квартир
              </div>

              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 opacity-0"
                style={{ animation: "fade-in 0.7s ease-out 0.3s forwards" }}
              >
                Уютное жильё<br />
                <span className="text-orange">в любом городе</span><br />
                России
              </h1>

              <p
                className="text-white/60 text-lg leading-relaxed mb-8 max-w-md opacity-0"
                style={{ animation: "fade-in 0.7s ease-out 0.5s forwards" }}
              >
                Сочи, Москва, Санкт-Петербург — выбирайте квартиру как дома.
                Онлайн-бронирование, проверенные апартаменты, поддержка менеджера.
              </p>

              <div
                className="flex flex-wrap gap-3 mb-10 opacity-0"
                style={{ animation: "fade-in 0.7s ease-out 0.6s forwards" }}
              >
                {["Без посредников", "Мгновенное подтверждение", "Заезд 24/7"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-white/70 text-sm">
                    <Icon name="Check" size={14} className="text-orange" />
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex flex-wrap gap-4 opacity-0"
                style={{ animation: "fade-in 0.7s ease-out 0.7s forwards" }}
              >
                <button
                  onClick={() => scrollTo("#apartments")}
                  className="bg-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-dark transition-all duration-200 text-base shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-0.5"
                >
                  Смотреть квартиры
                </button>
                <a
                  href="tel:+79002379757"
                  className="flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
                >
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Правая колонка — виджет бронирования */}
            <div
              id="booking-widget"
              className="opacity-0"
              style={{ animation: "fade-in 0.8s ease-out 0.5s forwards" }}
            >
              <div id="hr-widget"></div>
            </div>
          </div>
        </div>

        {/* Волнистый разделитель */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60H1440V20C1200 50 960 10 720 30C480 50 240 10 0 20V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── Статистика ─── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="text-center opacity-0"
                style={{ animation: `fade-in 0.6s ease-out ${0.1 * i + 0.2}s forwards` }}
              >
                <div className="font-display text-3xl md:text-4xl font-extrabold text-orange mb-1">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-dark/50 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Города ─── */}
      <section id="cities" className="py-20 bg-slate-soft">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Наши города
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              Где вас ждут наши квартиры
            </h2>
            <p className="text-dark/50 max-w-xl mx-auto text-base">
              Три популярных города России с богатым выбором проверенных апартаментов для любого бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CITIES.map((city, i) => (
              <div
                key={city.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer opacity-0 hover:-translate-y-1 transition-all duration-300"
                style={{ animation: `fade-in 0.6s ease-out ${0.15 * i + 0.2}s forwards` }}
                onClick={() => {
                  setActiveCity(city.id);
                  scrollTo("#apartments");
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-2xl text-white">{city.name}</h3>
                    <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      {city.count} квартир
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{city.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-orange text-sm font-semibold group-hover:gap-3 transition-all">
                    Смотреть квартиры
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Каталог квартир ─── */}
      <section id="apartments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
                Каталог квартир
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
                Выберите идеальные апартаменты
              </h2>
            </div>

            {/* Фильтры по городам */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Все города" },
                { id: "sochi", label: "Сочи" },
                { id: "moscow", label: "Москва" },
                { id: "spb", label: "Санкт-Петербург" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveCity(f.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeCity === f.id
                      ? "bg-orange text-white shadow-md shadow-orange/25"
                      : "bg-slate-light text-dark/60 hover:bg-orange-pale hover:text-orange"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Карточки квартир */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApartments.map((apt, i) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                style={{ animation: `fade-in 0.5s ease-out ${0.1 * i}s forwards` }}
              >
                {/* Фото */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={apt.img}
                    alt={apt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-orange text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {apt.cityName}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-dark/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Icon name="Star" size={11} className="text-yellow-400 fill-yellow-400" />
                      {apt.rating}
                    </span>
                  </div>
                </div>

                {/* Информация */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-dark mb-2 group-hover:text-orange transition-colors">
                    {apt.title}
                  </h3>

                  {/* Характеристики */}
                  <div className="flex items-center gap-4 text-sm text-dark/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Maximize2" size={13} className="text-orange" />
                      {apt.area} м²
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="BedDouble" size={13} className="text-orange" />
                      {apt.beds === 1 ? "Студия" : `${apt.beds} спальни`}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Building" size={13} className="text-orange" />
                      {apt.floor} этаж
                    </span>
                  </div>

                  {/* Теги */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {apt.tags.map((tag) => (
                      <span key={tag} className="bg-orange-pale text-orange text-xs font-medium px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Цена */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="font-bold text-xl text-dark">{apt.price.toLocaleString()} ₽</span>
                    <span className="text-dark/40 text-sm"> / сутки</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredApartments.length === 0 && (
            <div className="text-center py-16 text-dark/40">
              <Icon name="Search" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">Квартиры не найдены</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── О компании / Преимущества ─── */}
      <section id="about" className="py-20 bg-slate-soft">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Текст */}
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
                О компании
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">
                5 лет помогаем гостям<br />
                чувствовать себя <span className="text-orange">как дома</span>
              </h2>
              <p className="text-dark/60 text-base leading-relaxed mb-5">
                Orange Apart — это сервис посуточной аренды квартир в Сочи, Москве и Санкт-Петербурге.
                Мы работаем напрямую с собственниками, тщательно проверяем каждый объект и обеспечиваем
                гостям комфортное проживание без сюрпризов.
              </p>
              <p className="text-dark/60 text-base leading-relaxed mb-8">
                За 5 лет работы мы завершили более 10 000 заездов и заслужили доверие тысяч путешественников
                по всей России. Наша команда на связи 24/7, чтобы каждое ваше путешествие было незабываемым.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", text: "Сочи, Москва, СПб" },
                  { icon: "Users", text: "Более 10 000 гостей" },
                  { icon: "Star", text: "Рейтинг 4.9 из 5" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-dark/70 text-sm font-medium">
                    <div className="w-8 h-8 bg-orange-pale rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={15} className="text-orange" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Изображение */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                  alt="Orange Apart — уютные квартиры"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Карточка поверх */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-dark">98%</div>
                  <div className="text-xs text-dark/50 font-medium">Довольных гостей</div>
                </div>
              </div>
            </div>
          </div>

          {/* Преимущества */}
          <div>
            <div className="text-center mb-12">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
                Наши преимущества
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
                Почему выбирают Orange Apart
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVANTAGES.map((adv, i) => (
                <div
                  key={adv.title}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 opacity-0"
                  style={{ animation: `fade-in 0.6s ease-out ${0.1 * i + 0.2}s forwards` }}
                >
                  <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center mb-4">
                    <Icon name={adv.icon} size={22} className="text-orange" />
                  </div>
                  <h3 className="font-display font-bold text-base text-dark mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-dark/55 text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Отзывы ─── */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Отзывы гостей
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              Что говорят наши гости
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-dark text-lg">4.9</span>
              <span className="text-dark/40 text-sm">из 5 • более 400 отзывов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={review.name}
                className="bg-slate-soft rounded-2xl p-6 hover:shadow-md transition-all duration-300 opacity-0"
                style={{ animation: `fade-in 0.6s ease-out ${0.15 * i + 0.2}s forwards` }}
              >
                {/* Рейтинг */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Текст */}
                <p className="text-dark/70 text-sm leading-relaxed mb-5 italic">
                  «{review.text}»
                </p>

                {/* Автор */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-dark">{review.name}</div>
                    <div className="text-xs text-dark/40 flex items-center gap-1.5">
                      <Icon name="MapPin" size={11} className="text-orange" />
                      {review.city} · {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Баннер ─── */}
      <section className="py-20 bg-gradient-to-r from-orange-dark via-orange to-orange-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы к путешествию?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Забронируйте квартиру прямо сейчас и получите подтверждение мгновенно.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-orange font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors duration-200 text-base shadow-lg"
            >
              Выбрать квартиру
            </button>
            <a
              href="tel:+79002379757"
              className="flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
            >
              <Icon name="Phone" size={18} />
              8(900) 237-97-57
            </a>
          </div>
        </div>
      </section>

      {/* ─── Контакты ─── */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Контакты
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-4">
              {/* Телефон */}
              <a
                href="tel:+79002379757"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange/30 hover:bg-orange-pale/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-all duration-200">
                  <Icon name="Phone" size={20} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-0.5">Телефон</div>
                  <div className="font-semibold text-dark group-hover:text-orange transition-colors">8(900) 237-97-57</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:orangeapart@mail.ru"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange/30 hover:bg-orange-pale/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-all duration-200">
                  <Icon name="Mail" size={20} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-semibold text-dark group-hover:text-orange transition-colors">orangeapart@mail.ru</div>
                </div>
              </a>

              {/* Telegram скрытый */}
              <a
                href="https://t.me/orangeapartsochi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange/30 hover:bg-orange-pale/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-all duration-200">
                  <Icon name="Send" size={20} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-0.5">Telegram</div>
                  <div className="font-semibold text-dark group-hover:text-orange transition-colors">Написать в Telegram</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/79002379757"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange/30 hover:bg-orange-pale/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-all duration-200">
                  <Icon name="MessageCircle" size={20} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-0.5">WhatsApp</div>
                  <div className="font-semibold text-dark group-hover:text-orange transition-colors">8(900) 237-97-57</div>
                </div>
              </a>

              {/* VK Мессенджер Max */}
              <a
                href="https://vk.me/89002379757"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange/30 hover:bg-orange-pale/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-orange-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-all duration-200">
                  <Icon name="MessagesSquare" size={20} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-0.5">Мессенджер Max</div>
                  <div className="font-semibold text-dark group-hover:text-orange transition-colors">8(900) 237-97-57</div>
                </div>
              </a>
            </div>

            {/* Форма обратной связи */}
            <div className="bg-slate-soft rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-dark mb-6">
                Оставьте заявку
              </h3>
              {formStatus === "sent" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-500" />
                  </div>
                  <p className="font-bold text-dark text-lg mb-2">Заявка отправлена!</p>
                  <p className="text-dark/50 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-orange text-sm font-semibold hover:underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">
                      Город
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all appearance-none"
                    >
                      <option value="">Выберите город</option>
                      <option>Сочи</option>
                      <option>Москва</option>
                      <option>Санкт-Петербург</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите о ваших пожеланиях..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all resize-none"
                    />
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-orange text-white font-bold py-4 rounded-xl hover:bg-orange-dark transition-colors duration-200 text-base shadow-lg shadow-orange/20 disabled:opacity-60"
                  >
                    {formStatus === "sending" ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Футер ─── */}
      <footer className="bg-dark py-12 text-white/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-white/10">

            {/* Логотип и описание */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={16} className="text-white" />
                </div>
                <span className="font-display font-bold text-lg text-white">
                  Orange<span className="text-orange">Apart</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-5">
                Посуточная аренда квартир в Сочи, Москве и Санкт-Петербурге.
                Проверенные апартаменты, поддержка менеджера.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "Send", href: "https://t.me/orangeapartsochi" },
                  { icon: "Instagram", href: "#" },
                  { icon: "Phone", href: "tel:+79002379757" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors duration-200"
                  >
                    <Icon name={s.icon} size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Квартиры */}
            <div>
              <h4 className="font-display font-bold text-white text-sm mb-4">Квартиры</h4>
              <ul className="space-y-2.5">
                {["Сочи", "Москва", "Санкт-Петербург", "Все города"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo("#apartments")}
                      className="text-sm hover:text-orange transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Компания */}
            <div>
              <h4 className="font-display font-bold text-white text-sm mb-4">Компания</h4>
              <ul className="space-y-2.5">
                {["О нас", "Преимущества", "Отзывы", "Контакты"].map((item) => (
                  <li key={item}>
                    <button className="text-sm hover:text-orange transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="font-display font-bold text-white text-sm mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Phone" size={14} className="text-orange mt-0.5 flex-shrink-0" />
                  <a href="tel:+79002379757" className="hover:text-orange transition-colors">8(900) 237-97-57</a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Mail" size={14} className="text-orange mt-0.5 flex-shrink-0" />
                  <a href="mailto:orangeapart@mail.ru" className="hover:text-orange transition-colors">orangeapart@mail.ru</a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Send" size={14} className="text-orange mt-0.5 flex-shrink-0" />
                  <a href="https://t.me/orangeapartsochi" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">Telegram</a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="MessageCircle" size={14} className="text-orange mt-0.5 flex-shrink-0" />
                  <a href="https://wa.me/79002379757" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Подвал */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© 2024 Orange Apart. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-orange transition-colors">Условия аренды</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}