export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", backgroundColor: "#f7f7fc", color: "#1a1929" }}>
      <div style={{ fontSize: 96, fontWeight: 900, color: "#3D3B8E", lineHeight: 1 }}>404</div>
      <p style={{ fontSize: 20, marginTop: 16, marginBottom: 32 }}>Strona nie istnieje.</p>
      <a href="/" style={{ backgroundColor: "#3D3B8E", color: "#ffffff", textDecoration: "none", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15 }}>
        Wróć na stronę główną
      </a>
    </div>
  );
}
