"use client";
import { useState, useEffect } from "react";

// --- dane ---

const NAV_ITEMS = [
  { label: "Start", id: "start" },
  { label: "System", id: "system" },
  { label: "Funkcje", id: "funkcje" },
  { label: "Platforma", id: "platforma" },
  { label: "Wdrożenie", id: "wdrozenie" },
  { label: "Kontakt", id: "kontakt" },
];

const FUNKCJE = [
  {
    title: "Automatyzacja skrzynki mailowej",
    desc: "System czyta przychodzące wiadomości i wykonuje akcje automatycznie. Pracownik może też wydać polecenie przez czat - wysłać, skasować lub przenieść wiadomość bez otwierania skrzynki.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    title: "Automatyczne raporty",
    desc: "Lektos generuje raporty na podstawie danych z Twoich systemów i wysyła je według harmonogramu lub na żądanie.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M8 17V13M12 17V9M16 17V11"/>
      </svg>
    ),
  },
  {
    title: "Panel dla pracowników",
    desc: "Pracownicy zadają pytania w języku naturalnym i otrzymują odpowiedzi oparte na danych z podłączonych systemów w czasie rzeczywistym.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: "Integracje API",
    desc: "Lektos łączy się z Twoimi systemami przez API - ERP, CRM, e-commerce i inne. Gotowe konektory lub dedykowana integracja.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
      </svg>
    ),
  },
];

const AKRONIM = [
  { letter: "L", meaning: "Links your systems" },
  { letter: "E", meaning: "Executes tasks automatically" },
  { letter: "K", meaning: "Knows your data" },
  { letter: "T", meaning: "Talks your language" },
  { letter: "O", meaning: "Operates 24/7" },
  { letter: "S", meaning: "Scales with your business" },
];

const KROKI = [
  {
    num: "01",
    title: "Analiza procesów",
    desc: "Zbieramy dane o Twoich systemach i procesach - jakie narzędzia używasz, gdzie tracisz czas, co chcesz zautomatyzować.",
  },
  {
    num: "02",
    title: "Projekt automatyzacji",
    desc: "Omawiamy wymagania i dzielimy wdrożenie na bloki. Każdy blok to osobna sekwencja działań - zatwierdzasz zanim ruszymy dalej.",
  },
  {
    num: "03",
    title: "Wdrożenie etapami",
    desc: "Uruchamiamy kolejne bloki jeden po drugim. Testujesz każdy etap przed przejściem do następnego.",
  },
  {
    num: "04",
    title: "Gotowy system",
    desc: "Lektos działa. Monitorujemy, wprowadzamy poprawki i rozszerzamy system w miarę potrzeb.",
  },
];

const MODEL = [
  {
    title: "Infrastruktura zarządzana",
    desc: "Dostarczamy i konfigurujemy infrastrukturę serwerową dostosowaną do potrzeb Twojej firmy. Zarządzamy nią w całości - Ty korzystasz z systemu, my dbamy o resztę.",
    highlight: true,
  },
  {
    title: "Wdrożenie na infrastrukturze klienta",
    desc: "Wdrożenie Lektos na Twoich własnych serwerach i systemach. Pełna kontrola po Twojej stronie.",
    highlight: false,
  },
  {
    title: "Dedykowane wdrożenie",
    desc: "Dedykowane wdrożenie dostosowane do procesów Twojej firmy. Każdy element systemu projektujemy pod Twoje potrzeby.",
    highlight: false,
  },
];

// --- komponent ---

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 20);
      setShowTop(y > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", color: "#1a1929", backgroundColor: "#ffffff" }}>

      {/* ===== NAVBAR ===== */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
        borderBottom: scrolled ? "1px solid #e0e0f0" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(61,59,142,0.08)" : "none",
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          <button onClick={scrollToTop} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, backgroundColor: "#3D3B8E", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 800, fontSize: 18, color: "#ffffff" }}>L</span>
            </div>
            <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 17, fontWeight: 800, color: "#1a1929", letterSpacing: 2 }}>LEKTOS</span>
          </button>

          <div className="lk-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => item.id === "start" ? scrollToTop() : scrollToSection(item.id)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 500, color: "#4a4870", padding: "8px 16px", borderRadius: 6, transition: "all 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#eeeef9"; e.currentTarget.style.color = "#3D3B8E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#4a4870"; }}
              >{item.label}</button>
            ))}
            <button
              onClick={() => scrollToSection("kontakt")}
              style={{ marginLeft: 12, background: "#3D3B8E", border: "none", cursor: "pointer", fontFamily: "var(--font-sora), sans-serif", fontSize: 14, fontWeight: 700, color: "#ffffff", padding: "9px 20px", borderRadius: 7, transition: "background 0.15s" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2e2c6e"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3D3B8E"}
            >Umów demo</button>
          </div>

          <button
            className="lk-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#3D3B8E" }}
            aria-label="Menu"
          >
            {menuOpen
              ? <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>

        {menuOpen && (
          <div className="lk-mobile" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e8e8f4", padding: "8px 24px 20px" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => item.id === "start" ? scrollToTop() : scrollToSection(item.id)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid #f0f0f8", cursor: "pointer", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, fontWeight: 500, color: "#1a1929", padding: "13px 0" }}
              >{item.label}</button>
            ))}
            <button
              onClick={() => scrollToSection("kontakt")}
              style={{ marginTop: 16, display: "block", width: "100%", background: "#3D3B8E", border: "none", cursor: "pointer", fontFamily: "var(--font-sora), sans-serif", fontSize: 15, fontWeight: 700, color: "#ffffff", padding: "13px 0", borderRadius: 8 }}
            >Umów demo</button>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" style={{ position: "relative", minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: "#ffffff" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, #eeeef9 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "-6%", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(120px, 18vw, 280px)", fontWeight: 900, color: "rgba(61,59,142,0.05)", letterSpacing: -8, userSelect: "none", lineHeight: 1, whiteSpace: "nowrap", pointerEvents: "none" }}>
          LEKTOS
        </div>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(180deg, transparent 0%, #3D3B8E 30%, #3D3B8E 70%, transparent 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1140, margin: "0 auto", padding: "80px 24px 80px 48px", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#eeeef9", borderRadius: 100, padding: "6px 16px", marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#3D3B8E" }} />
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#3D3B8E", letterSpacing: 2, textTransform: "uppercase" }}>Connect. Automate. Ask.</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, color: "#1a1929", lineHeight: 1.08, marginBottom: 28, letterSpacing: -2 }}>
              Intelligent<br />
              Business<br />
              <span style={{ color: "#3D3B8E" }}>Automation</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#4a4870", lineHeight: 1.8, marginBottom: 44, maxWidth: 500 }}>
              Twoje systemy generują dane. Twoi pracownicy tracą czas na ręczne zadania.
              Lektos to zmienia - automatyzuje operacje, raportuje i odpowiada na pytania
              w języku naturalnym.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollToSection("kontakt")}
                style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 15, fontWeight: 700, backgroundColor: "#3D3B8E", color: "#ffffff", border: "2px solid #3D3B8E", borderRadius: 8, padding: "14px 30px", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2e2c6e"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3D3B8E"}
              >Umów demo</button>
              <button
                onClick={() => scrollToSection("kontakt")}
                style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 15, fontWeight: 700, backgroundColor: "transparent", color: "#3D3B8E", border: "2px solid #3D3B8E", borderRadius: 8, padding: "14px 30px", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3D3B8E"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#3D3B8E"; }}
              >Zadaj pytanie</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== O SYSTEMIE ===== */}
      <section id="system" style={{ padding: "104px 24px", backgroundColor: "#1a1929" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="lk-grid-2">
          <div>
            <div style={{ width: 48, height: 4, backgroundColor: "#3D3B8E", borderRadius: 2, marginBottom: 24 }} />
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, letterSpacing: -1 }}>
              System
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, margin: 0 }}>
              Lektos to platforma automatyzacji operacji biznesowych łącząca obsługę poczty,
              integracje z systemami zewnętrznymi oraz raportowanie w jednym miejscu.
            </p>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, margin: 0 }}>
              System przetwarza przychodzące zapytania, wykonuje akcje w podłączonych
              systemach i generuje raporty bez udziału człowieka.
            </p>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, margin: 0 }}>
              Pracownicy mogą zadawać pytania w języku naturalnym przez wbudowany panel -
              i dostają odpowiedzi oparte na danych z podłączonych systemów.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FUNKCJE ===== */}
      <section id="funkcje" style={{ padding: "104px 24px", backgroundColor: "#f7f7fc" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#3D3B8E", letterSpacing: 3, textTransform: "uppercase" }}>Funkcje</span>
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#1a1929", lineHeight: 1.08, marginTop: 12, letterSpacing: -1 }}>Co potrafi Lektos?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 2 }}>
            {FUNKCJE.map((f, i) => (
              <div
                key={f.title}
                style={{ backgroundColor: "#ffffff", padding: 36, borderLeft: i === 0 ? "none" : "1px solid #e8e8f4", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3D3B8E";
                  const icon = e.currentTarget.querySelector(".lk-fi") as HTMLElement;
                  const title = e.currentTarget.querySelector(".lk-ft") as HTMLElement;
                  const desc = e.currentTarget.querySelector(".lk-fd") as HTMLElement;
                  if (icon) icon.style.color = "#ffffff";
                  if (title) title.style.color = "#ffffff";
                  if (desc) desc.style.color = "rgba(255,255,255,0.72)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  const icon = e.currentTarget.querySelector(".lk-fi") as HTMLElement;
                  const title = e.currentTarget.querySelector(".lk-ft") as HTMLElement;
                  const desc = e.currentTarget.querySelector(".lk-fd") as HTMLElement;
                  if (icon) icon.style.color = "#3D3B8E";
                  if (title) title.style.color = "#1a1929";
                  if (desc) desc.style.color = "#4a4870";
                }}
              >
                <div className="lk-fi" style={{ color: "#3D3B8E", marginBottom: 20, transition: "color 0.2s" }}>{f.icon}</div>
                <h3 className="lk-ft" style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 17, fontWeight: 700, color: "#1a1929", marginBottom: 14, lineHeight: 1.3, transition: "color 0.2s" }}>{f.title}</h3>
                <p className="lk-fd" style={{ fontSize: 14, color: "#4a4870", lineHeight: 1.75, transition: "color 0.2s" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORMA ===== */}
      <section id="platforma" style={{ padding: "104px 24px", backgroundColor: "#3D3B8E", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, bottom: -60, fontFamily: "var(--font-sora), sans-serif", fontSize: 340, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>6</div>
        <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative" }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: 3, textTransform: "uppercase" }}>Platforma</span>
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, marginTop: 12, letterSpacing: -1 }}>Co znaczy LEKTOS?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginTop: 16, maxWidth: 460, lineHeight: 1.7 }}>
              Lektos - z greki: "wybrany, zebrany". Platforma zbiera dane z systemów i zamienia je w działania.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0 }}>
            {AKRONIM.map((item, i) => (
              <div key={item.letter} style={{ display: "flex", alignItems: "center", gap: 20, padding: "24px 32px 24px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1, width: 72, flexShrink: 0 }}>{item.letter}</span>
                <div>
                  <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 24, fontWeight: 800, color: "#ffffff", display: "block", lineHeight: 1 }}>{item.letter}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 6, display: "block" }}>{item.meaning}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WDROZENIE + MODEL ===== */}
      <section id="wdrozenie" style={{ padding: "104px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>

          <div style={{ marginBottom: 96 }}>
            <div style={{ marginBottom: 56 }}>
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#3D3B8E", letterSpacing: 3, textTransform: "uppercase" }}>Wdrożenie</span>
              <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#1a1929", lineHeight: 1.08, marginTop: 12, letterSpacing: -1 }}>Proces wdrożenia</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }} className="lk-kroki">
              {KROKI.map((k, i) => (
                <div key={k.num} style={{ paddingRight: i < KROKI.length - 1 ? 32 : 0, paddingLeft: i > 0 ? 32 : 0, borderRight: i < KROKI.length - 1 ? "1px solid #e8e8f4" : "none" }} className="lk-krok">
                  <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 80, fontWeight: 900, color: "#f0f0fa", lineHeight: 1, marginBottom: 8, letterSpacing: -4 }}>{k.num}</div>
                  <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 18, fontWeight: 700, color: "#1a1929", marginBottom: 12, lineHeight: 1.2 }}>{k.title}</h3>
                  <p style={{ fontSize: 14, color: "#4a4870", lineHeight: 1.75 }}>{k.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#3D3B8E", letterSpacing: 3, textTransform: "uppercase" }}>Model współpracy</span>
              <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#1a1929", lineHeight: 1.1, marginTop: 12, letterSpacing: -1 }}>Jak możemy współpracować?</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {MODEL.map((m) => (
                <div key={m.title} style={{ backgroundColor: m.highlight ? "#3D3B8E" : "#f7f7fc", borderRadius: 12, padding: "36px 32px", border: m.highlight ? "none" : "1px solid #e8e8f4" }}>
                  <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 18, fontWeight: 700, color: m.highlight ? "#ffffff" : "#1a1929", marginBottom: 14, lineHeight: 1.2 }}>{m.title}</h3>
                  <p style={{ fontSize: 15, color: m.highlight ? "rgba(255,255,255,0.75)" : "#4a4870", lineHeight: 1.75 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== KONTAKT ===== */}
      <section id="kontakt" style={{ padding: "104px 24px", backgroundColor: "#1a1929", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,59,142,0.35) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 3, textTransform: "uppercase" }}>Kontakt</span>
          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, margin: "16px 0 28px", letterSpacing: -2 }}>
            Porozmawiajmy
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.85, marginBottom: 24 }}>
            Demo to działający prototyp Lektos skonfigurowany pod jeden z Twoich procesów.
            Przygotowujemy je bezpłatnie - żeby zobaczyć, zanim zdecydujesz.
          </p>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.85, marginBottom: 52 }}>
            Lektos to produkt synchronicity.one - firmy specjalizującej się
            w rozwiązaniach programistycznych, integracji systemów i budowie
            prywatnych chmur na żądanie. Napisz do nas i omówimy Twój przypadek.
          </p>
          <a
            href="mailto:hello@synchronicity.one"
            style={{ display: "inline-block", fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, color: "#ffffff", textDecoration: "none", borderBottom: "3px solid #3D3B8E", paddingBottom: 4, marginBottom: 24, letterSpacing: -0.5, transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#b0aff0"; e.currentTarget.style.borderColor = "#b0aff0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.borderColor = "#3D3B8E"; }}
          >hello@synchronicity.one</a>
          <br />
          <a
            href="https://www.synchronicity.one"
            target="_blank"
            rel="noopener"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.38)"}
          >www.synchronicity.one</a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ backgroundColor: "#111120", color: "rgba(255,255,255,0.28)", padding: "24px", textAlign: "center", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Lektos.pl</p>
      </footer>

      {/* ===== BACK TO TOP ===== */}
      {showTop && (
        <button
          onClick={scrollToTop}
          style={{ position: "fixed", bottom: 32, right: 32, width: 48, height: 48, backgroundColor: "#3D3B8E", border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(61,59,142,0.4)", zIndex: 200, transition: "background 0.2s, transform 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2e2c6e"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#3D3B8E"; e.currentTarget.style.transform = "translateY(0)"; }}
          aria-label="Powrot na gore"
        >
          <svg width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      )}

      <style>{`
        @media (max-width: 768px) {
          .lk-desktop { display: none !important; }
          .lk-grid-2 { grid-template-columns: 1fr !important; gap: 32px !important; }
          .lk-krok { padding-left: 0 !important; padding-right: 0 !important; border-right: none !important; padding-top: 28px !important; border-top: 1px solid #e8e8f4; }
          .lk-kroki > div:first-child { border-top: none !important; padding-top: 0 !important; }
        }
        @media (min-width: 769px) {
          .lk-mobile { display: none !important; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; }
      `}</style>
    </div>
  );
}
