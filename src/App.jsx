import { useState, useEffect } from "react";

const COLORS = {
  pink: "#FF97C6",
  pinkLight: "#FFC2DE",
  pinkPale: "#FFF0F3",
  teal: "#25A9A2",
  tealLight: "#AADED9",
  tealMid: "#6FCCC6",
  yellow: "#DFCC46",
  orange: "#FB9E62",
  white: "#FFFFFF",
  dark: "#121212",
  purple: "#6C388A",
  bg: "#FFFFFF",
};

const productImages = [
  "https://decokit.shop/cdn/shop/files/Kitfiestamagica.png?v=1756534635",
  "https://via.placeholder.com/600x600/FFC2DE/FF97C6?text=Invitaciones+Digitales",
  "https://via.placeholder.com/600x600/AADED9/25A9A2?text=Toppers+%26+Cajitas",
  "https://via.placeholder.com/600x600/FFF0F3/FF97C6?text=Banderines+%26+Etiquetas",
  "https://via.placeholder.com/600x600/DFCC46/FFFFFF?text=+10000+Dise%C3%B1os",
];

const benefits = [
  { icon: "🎨", title: "Más de 10.000 diseños", desc: "Tendencias actuales para cada temática infantil" },
  { icon: "⚡", title: "Listo en minutos", desc: "Descarga inmediata tras el pago, sin esperas" },
  { icon: "🖨️", title: "Imprime desde casa", desc: "Formatos optimizados para cualquier impresora" },
  { icon: "💰", title: "Ahorra hasta 80%", desc: "Comparado con decoraciones físicas de tienda" },
  { icon: "✏️", title: "100% Personalizable", desc: "Edita nombres, colores y textos fácilmente" },
  { icon: "📱", title: "Sin app requerida", desc: "Edita desde el navegador o cualquier dispositivo" },
];

const includes = [
  { icon: "💌", name: "Invitaciones digitales", qty: "20 diseños" },
  { icon: "🎂", name: "Toppers para torta", qty: "15 diseños" },
  { icon: "📦", name: "Cajitas armables", qty: "12 diseños" },
  { icon: "🏳️", name: "Banderines decorativos", qty: "10 diseños" },
  { icon: "🏷️", name: "Etiquetas adhesivas", qty: "25 diseños" },
  { icon: "🎁", name: "Tarjetas de regalo", qty: "10 diseños" },
  { icon: "🎀", name: "Souvenirs para imprimir", qty: "8 diseños" },
  { icon: "📋", name: "Menú y programas", qty: "6 diseños" },
  { icon: "🖼️", name: "Marcos fotográficos", qty: "10 diseños" },
  { icon: "🎉", name: "Kit completo de mesa", qty: "5 diseños" },
];

const faqs = [
  {
    q: "¿Cómo recibo mi compra?",
    a: "Inmediatamente después del pago recibirás un enlace de descarga en tu correo electrónico. El acceso es instantáneo, las 24 horas del día.",
  },
  {
    q: "¿Necesito algún programa especial para editarlo?",
    a: "No. Los archivos vienen en formato PDF editable y JPG de alta resolución. Puedes editarlos desde Canva (gratis) o cualquier visor de PDF.",
  },
  {
    q: "¿Puedo imprimir en casa?",
    a: "Sí, todos los diseños están optimizados para impresión casera en papel tamaño carta o A4. También puedes llevarlos a una imprenta.",
  },
  {
    q: "¿Sirve para cualquier temática?",
    a: "Absolutamente. El kit incluye plantillas neutras y coloridas que se adaptan a cualquier temática: unicornio, dinosaurios, princesas, superhéroes y más.",
  },
  {
    q: "¿Puedo usar los diseños para venderlos?",
    a: "La licencia es para uso personal. No está permitida la reventa de los archivos originales.",
  },
];

const reviews = [
  { name: "María G.", stars: 5, comment: "¡Increíble! Decoré el cumpleaños de mi hija en 2 horas con todo impreso desde casa. Ahorramos muchísimo.", date: "hace 3 días" },
  { name: "Sofía R.", stars: 5, comment: "Los diseños son hermosos y muy modernos. Mis amigas preguntaron si lo había contratado con un diseñador.", date: "hace 1 semana" },
  { name: "Carla M.", stars: 5, comment: "Fácil de editar, fácil de imprimir. El mejor kit que he comprado. Ya lo usé para 3 cumpleaños diferentes.", date: "hace 2 semanas" },
  { name: "Valentina P.", stars: 4, comment: "Muy completo y económico. Tardé un poco en entender el editor pero luego todo fluyó perfecto.", date: "hace 1 mes" },
];

function StarRating({ count = 5 }) {
  return (
    <span>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < count ? "#DFCC46" : "#ddd", fontSize: "1rem" }}>★</span>
      ))}
    </span>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 2; m = 47; s = 33; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", margin: "12px 0" }}>
      {[{ label: "hs", val: time.h }, { label: "min", val: time.m }, { label: "seg", val: time.s }].map((item, i) => (
        <span key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{
            background: COLORS.teal,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: "1.4rem",
            padding: "6px 12px",
            borderRadius: "8px",
            minWidth: "48px",
            textAlign: "center",
            fontFamily: "monospace",
          }}>{pad(item.val)}</span>
          <span style={{ fontSize: "0.65rem", color: COLORS.teal, fontWeight: 600, marginTop: 2 }}>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("descripcion");
  const [openFaq, setOpenFaq] = useState(null);
  const [added, setAdded] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);
  const [imgZoom, setImgZoom] = useState(false);

  const price = 17.0;
  const originalPrice = 49.0;
  const discount = Math.round((1 - price / originalPrice) * 100);

  // TODO: Conectar con pasarela de pago real (Stripe, PayPal, MercadoPago)
  const handleBuy = () => {
    setAdded(true);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3500);
    setTimeout(() => setAdded(false), 3500);
  };

  const handleAddCart = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3500);
  };

  const styles = {
    // Layout
    body: {
      fontFamily: "'Figtree', 'Segoe UI', sans-serif",
      background: COLORS.bg,
      color: COLORS.dark,
      margin: 0,
      padding: 0,
      minHeight: "100vh",
    },
    // Header
    header: {
      background: COLORS.white,
      borderBottom: `2px solid ${COLORS.pinkLight}`,
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 12px rgba(170,222,217,0.3)",
    },
    logo: {
      fontWeight: 800,
      fontSize: "1.4rem",
      color: COLORS.teal,
      letterSpacing: "-0.5px",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    nav: {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    },
    navLink: {
      color: COLORS.dark,
      textDecoration: "none",
      fontSize: "0.9rem",
      fontWeight: 500,
      transition: "color 0.2s",
      cursor: "pointer",
    },
    cartIcon: {
      background: COLORS.pinkLight,
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "1.2rem",
      transition: "transform 0.2s, background 0.2s",
    },
    // Main container
    main: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "32px 16px",
    },
    // Breadcrumb
    breadcrumb: {
      fontSize: "0.8rem",
      color: "#888",
      marginBottom: "24px",
      display: "flex",
      gap: "6px",
      alignItems: "center",
      flexWrap: "wrap",
    },
    // Product section
    productGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "start",
      marginBottom: "64px",
    },
    // Image gallery
    mainImageWrapper: {
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      background: COLORS.pinkPale,
      cursor: "zoom-in",
      boxShadow: "0 8px 32px rgba(170,222,217,0.4)",
    },
    mainImage: {
      width: "100%",
      aspectRatio: "1/1",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.3s ease",
    },
    thumbnailGrid: {
      display: "flex",
      gap: "10px",
      marginTop: "12px",
      flexWrap: "wrap",
    },
    thumbnail: (active) => ({
      width: "72px",
      height: "72px",
      borderRadius: "10px",
      objectFit: "cover",
      cursor: "pointer",
      border: active ? `3px solid ${COLORS.teal}` : `2px solid ${COLORS.pinkLight}`,
      transition: "border 0.2s, transform 0.2s",
      transform: active ? "scale(1.05)" : "scale(1)",
    }),
    // Badge on image
    badgeDiscount: {
      position: "absolute",
      top: "16px",
      left: "16px",
      background: COLORS.yellow,
      color: COLORS.dark,
      fontWeight: 800,
      fontSize: "0.9rem",
      padding: "6px 14px",
      borderRadius: "30px",
      zIndex: 2,
    },
    badgeDigital: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: COLORS.teal,
      color: COLORS.white,
      fontWeight: 700,
      fontSize: "0.75rem",
      padding: "5px 12px",
      borderRadius: "30px",
      zIndex: 2,
    },
    // Product info
    productInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    storeBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: COLORS.pinkPale,
      color: COLORS.pink,
      fontWeight: 700,
      fontSize: "0.75rem",
      padding: "4px 12px",
      borderRadius: "30px",
      width: "fit-content",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
    productTitle: {
      fontSize: "2rem",
      fontWeight: 800,
      color: COLORS.dark,
      lineHeight: 1.2,
      margin: 0,
    },
    ratingRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "0.88rem",
    },
    ratingCount: {
      color: "#666",
    },
    priceRow: {
      display: "flex",
      alignItems: "baseline",
      gap: "12px",
    },
    priceMain: {
      fontSize: "2.4rem",
      fontWeight: 800,
      color: COLORS.teal,
    },
    priceOriginal: {
      fontSize: "1.2rem",
      color: "#aaa",
      textDecoration: "line-through",
    },
    saveBadge: {
      background: COLORS.pinkLight,
      color: COLORS.teal,
      fontWeight: 700,
      fontSize: "0.8rem",
      padding: "4px 10px",
      borderRadius: "20px",
    },
    // Urgency banner
    urgencyBanner: {
      background: `linear-gradient(135deg, ${COLORS.pinkPale}, ${COLORS.tealLight})`,
      border: `1.5px solid ${COLORS.pinkLight}`,
      borderRadius: "12px",
      padding: "12px 16px",
      textAlign: "center",
    },
    urgencyText: {
      fontWeight: 700,
      color: COLORS.teal,
      fontSize: "0.85rem",
      margin: 0,
    },
    // Qty selector
    qtyRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    qtyLabel: {
      fontWeight: 600,
      fontSize: "0.9rem",
      color: COLORS.dark,
    },
    qtyControls: {
      display: "flex",
      alignItems: "center",
      border: `2px solid ${COLORS.pinkLight}`,
      borderRadius: "10px",
      overflow: "hidden",
    },
    qtyBtn: {
      background: COLORS.pinkLight,
      border: "none",
      width: "36px",
      height: "36px",
      fontSize: "1.2rem",
      cursor: "pointer",
      fontWeight: 700,
      color: COLORS.teal,
      transition: "background 0.2s",
    },
    qtyDisplay: {
      padding: "0 18px",
      fontWeight: 700,
      fontSize: "1rem",
      color: COLORS.dark,
    },
    // CTA Buttons
    btnBuy: (hover) => ({
      background: hover
        ? `linear-gradient(135deg, #25A9A2, #6FCCC6)`
        : `linear-gradient(135deg, #6FCCC6, #25A9A2)`,
      color: COLORS.white,
      border: "none",
      borderRadius: "14px",
      padding: "18px 32px",
      fontSize: "1.15rem",
      fontWeight: 800,
      cursor: "pointer",
      width: "100%",
      letterSpacing: "0.3px",
      transition: "all 0.25s ease",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
      boxShadow: hover
        ? "0 8px 24px rgba(37,169,162,0.45)"
        : "0 4px 16px rgba(37,169,162,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    }),
    btnCart: (hover) => ({
      background: hover ? COLORS.pinkLight : COLORS.white,
      color: COLORS.pink,
      border: `2px solid ${COLORS.pinkLight}`,
      borderRadius: "14px",
      padding: "16px 32px",
      fontSize: "1rem",
      fontWeight: 700,
      cursor: "pointer",
      width: "100%",
      transition: "all 0.25s ease",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
      boxShadow: hover ? "0 4px 16px rgba(255,151,198,0.3)" : "none",
    }),
    // Trust badges
    trustRow: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
    },
    trustBadge: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "0.75rem",
      color: "#555",
      background: "#f9f9f9",
      borderRadius: "8px",
      padding: "5px 10px",
      border: "1px solid #eee",
      fontWeight: 500,
    },
    // Notification
    notif: {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      background: COLORS.teal,
      color: COLORS.white,
      borderRadius: "14px",
      padding: "16px 24px",
      fontWeight: 700,
      fontSize: "0.95rem",
      zIndex: 999,
      boxShadow: "0 8px 32px rgba(37,169,162,0.4)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      animation: "slideIn 0.4s ease",
      maxWidth: "320px",
    },
    // Tabs
    tabRow: {
      display: "flex",
      borderBottom: `2px solid ${COLORS.pinkLight}`,
      marginBottom: "32px",
      gap: "4px",
      flexWrap: "wrap",
    },
    tab: (active) => ({
      padding: "12px 24px",
      fontWeight: active ? 700 : 500,
      fontSize: "0.95rem",
      cursor: "pointer",
      border: "none",
      background: "transparent",
      color: active ? COLORS.teal : "#888",
      borderBottom: active ? `3px solid ${COLORS.teal}` : "3px solid transparent",
      transition: "all 0.2s",
    }),
    // Benefits grid
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginBottom: "48px",
    },
    benefitCard: {
      background: COLORS.pinkPale,
      borderRadius: "16px",
      padding: "24px 20px",
      textAlign: "center",
      border: `1px solid ${COLORS.pinkLight}`,
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    benefitIcon: {
      fontSize: "2.2rem",
      marginBottom: "10px",
    },
    benefitTitle: {
      fontWeight: 700,
      fontSize: "0.95rem",
      color: COLORS.dark,
      margin: "0 0 6px",
    },
    benefitDesc: {
      fontSize: "0.82rem",
      color: "#666",
      margin: 0,
      lineHeight: 1.5,
    },
    // Includes grid
    includesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      marginBottom: "40px",
    },
    includeItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: `linear-gradient(135deg, ${COLORS.pinkPale}, ${COLORS.white})`,
      borderRadius: "12px",
      padding: "14px 16px",
      border: `1px solid ${COLORS.pinkLight}`,
    },
    includeIcon: {
      fontSize: "1.6rem",
      minWidth: "32px",
    },
    includeName: {
      fontWeight: 600,
      fontSize: "0.88rem",
      color: COLORS.dark,
      margin: 0,
    },
    includeQty: {
      fontSize: "0.78rem",
      color: COLORS.teal,
      fontWeight: 500,
      margin: 0,
    },
    // FAQ
    faqItem: {
      borderBottom: `1px solid ${COLORS.pinkLight}`,
      padding: "0",
      marginBottom: "4px",
    },
    faqQuestion: (open) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "18px 4px",
      fontWeight: open ? 700 : 600,
      fontSize: "0.95rem",
      color: open ? COLORS.teal : COLORS.dark,
      transition: "color 0.2s",
    }),
    faqAnswer: {
      padding: "0 4px 18px",
      fontSize: "0.88rem",
      color: "#555",
      lineHeight: 1.7,
    },
    // Reviews
    reviewsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    reviewCard: {
      background: COLORS.white,
      border: `1px solid ${COLORS.pinkLight}`,
      borderRadius: "14px",
      padding: "20px",
      boxShadow: "0 2px 12px rgba(170,222,217,0.15)",
    },
    reviewHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "10px",
    },
    reviewName: {
      fontWeight: 700,
      fontSize: "0.9rem",
      color: COLORS.dark,
    },
    reviewDate: {
      fontSize: "0.75rem",
      color: "#aaa",
    },
    reviewComment: {
      fontSize: "0.85rem",
      color: "#444",
      lineHeight: 1.6,
      margin: 0,
    },
    // Bottom CTA banner
    ctaBanner: {
      background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.pinkLight})`,
      borderRadius: "24px",
      padding: "48px 32px",
      textAlign: "center",
      margin: "48px 0",
    },
    ctaTitle: {
      fontSize: "2rem",
      fontWeight: 800,
      color: COLORS.dark,
      margin: "0 0 12px",
    },
    ctaSubtitle: {
      fontSize: "1.05rem",
      color: "#444",
      margin: "0 0 32px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    ctaPrice: {
      fontSize: "3rem",
      fontWeight: 900,
      color: COLORS.teal,
      margin: "0 0 24px",
    },
    // Footer
    footer: {
      background: COLORS.dark,
      color: "#ccc",
      padding: "40px 24px 24px",
    },
    footerGrid: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px",
      marginBottom: "32px",
    },
    footerTitle: {
      color: COLORS.white,
      fontWeight: 700,
      fontSize: "1rem",
      marginBottom: "12px",
    },
    footerLink: {
      display: "block",
      color: "#aaa",
      textDecoration: "none",
      fontSize: "0.85rem",
      marginBottom: "8px",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    footerBottom: {
      borderTop: "1px solid #333",
      paddingTop: "24px",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "#666",
      maxWidth: "1200px",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.body}>
      {/* Notification Toast */}
      {showNotif && (
        <div style={styles.notif}>
          <span style={{ fontSize: "1.4rem" }}>🎉</span>
          <span>¡Añadido! Revisa tu carrito para continuar.</span>
        </div>
      )}

      {/* CSS Animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .includes-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .product-title { font-size: 1.5rem !important; }
          .price-main { font-size: 2rem !important; }
          .cta-title { font-size: 1.5rem !important; }
          .nav-desktop { display: none !important; }
          .thumbnail-item { width: 56px !important; height: 56px !important; }
        }
        @media (max-width: 480px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(170,222,217,0.4) !important;
        }
        .thumb-item:hover {
          transform: scale(1.08) !important;
        }
        .footer-link:hover { color: #FF97C6 !important; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <a style={styles.logo} href="#">
          <span style={{ fontSize: "1.5rem" }}>🎉</span>
          hazlo ahora
        </a>
        <nav style={{ ...styles.nav }} className="nav-desktop">
          <span style={styles.navLink}>Inicio</span>
          <span style={styles.navLink}>Kits digitales</span>
          <span style={styles.navLink}>Cómo funciona</span>
          <span style={styles.navLink}>Contacto</span>
        </nav>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            style={{
              ...styles.cartIcon,
              background: hoverCart ? COLORS.pinkLight : COLORS.pinkPale,
              transform: hoverCart ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => setHoverCart(true)}
            onMouseLeave={() => setHoverCart(false)}
            onClick={handleAddCart}
          >
            🛒
          </button>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <span style={{ cursor: "pointer", color: COLORS.teal }}>Inicio</span>
          <span>/</span>
          <span style={{ cursor: "pointer", color: COLORS.teal }}>Kits digitales</span>
          <span>/</span>
          <span style={{ color: "#888" }}>fiesta Print Pro</span>
        </div>

        {/* Product Grid */}
        <div
          style={{
            ...styles.productGrid,
          }}
          className="product-grid"
        >
          {/* Left: Gallery */}
          <div>
            <div
              style={styles.mainImageWrapper}
              onClick={() => setImgZoom(!imgZoom)}
            >
              <span style={styles.badgeDiscount}>-{discount}% OFF</span>
              <span style={styles.badgeDigital}>📥 Digital</span>
              <img
                src={productImages[selectedImage]}
                alt="fiesta Print Pro"
                style={{
                  ...styles.mainImage,
                  transform: imgZoom ? "scale(1.06)" : "scale(1)",
                }}
              />
            </div>
            {/* Thumbnails */}
            <div style={styles.thumbnailGrid}>
              {productImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Vista ${i + 1}`}
                  className="thumbnail-item thumb-item"
                  style={styles.thumbnail(selectedImage === i)}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div style={styles.productInfo}>
            <span style={styles.storeBadge}>
              <span>✨</span> hazlo ahora — Tienda Digital
            </span>

            <h1 style={styles.productTitle} className="product-title">
              fiesta Print Pro
              <br />
              <span style={{ color: COLORS.pink, fontSize: "1.3rem" }}>
                + 10 Regalos incluidos
              </span>
            </h1>

            {/* Rating */}
            <div style={styles.ratingRow}>
              <StarRating count={5} />
              <span style={styles.ratingCount}>4.9/5 · <strong>128 reseñas</strong></span>
              <span style={{ color: COLORS.teal, fontWeight: 600 }}>✓ Verificadas</span>
            </div>

            {/* Price */}
            <div style={styles.priceRow}>
              <span style={styles.priceMain} className="price-main">USD $17.00</span>
              <span style={styles.priceOriginal}>$49.00</span>
              <span style={styles.saveBadge}>Ahorras $32</span>
            </div>

            {/* Urgency */}
            <div style={styles.urgencyBanner}>
              <p style={styles.urgencyText}>
                🔥 ¡Oferta limitada! Termina en:
              </p>
              <CountdownTimer />
              <p style={{ fontSize: "0.78rem", color: "#666", margin: "4px 0 0" }}>
                ⚡ 47 personas están viendo este kit ahora mismo
              </p>
            </div>

            {/* Qty */}
            <div style={styles.qtyRow}>
              <span style={styles.qtyLabel}>Cantidad:</span>
              <div style={styles.qtyControls}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >−</button>
                <span style={styles.qtyDisplay}>{qty}</span>
                <button
                  style={styles.qtyBtn}
                  onClick={() => setQty(qty + 1)}
                >+</button>
              </div>
              <span style={{ fontSize: "0.82rem", color: "#888" }}>
                Descarga digital — entrega inmediata
              </span>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                style={{
                  ...styles.btnBuy(hoverBtn),
                  animation: !hoverBtn ? "pulse 2s infinite" : "none",
                }}
                onMouseEnter={() => setHoverBtn(true)}
                onMouseLeave={() => setHoverBtn(false)}
                onClick={handleBuy}
              >
                {added ? "✓ ¡Añadido al carrito!" : "⚡ Comprar ahora — USD $17.00"}
              </button>
              <button
                style={styles.btnCart(hoverCart)}
                onMouseEnter={() => setHoverCart(true)}
                onMouseLeave={() => setHoverCart(false)}
                onClick={handleAddCart}
              >
                🛒 Agregar al carrito
              </button>
            </div>

            {/* Trust badges */}
            <div style={styles.trustRow}>
              {[
                { icon: "🔒", text: "Pago 100% seguro" },
                { icon: "📧", text: "Envío instantáneo" },
                { icon: "↩️", text: "Garantía 7 días" },
                { icon: "💬", text: "Soporte incluido" },
              ].map((b, i) => (
                <span key={i} style={styles.trustBadge}>
                  <span>{b.icon}</span> {b.text}
                </span>
              ))}
            </div>

            {/* Quick includes list */}
            <div style={{
              background: COLORS.pinkPale,
              borderRadius: "12px",
              padding: "16px",
              border: `1px solid ${COLORS.pinkLight}`,
            }}>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: COLORS.teal, margin: "0 0 10px" }}>
                🎁 ¿Qué incluye?
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {["Invitaciones digitales", "Toppers para torta", "Cajitas armables", "Banderines", "Etiquetas adhesivas", "+10.000 diseños más"].map((item, i) => (
                  <span key={i} style={{ fontSize: "0.8rem", color: "#444", display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ color: COLORS.teal, fontWeight: 700 }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={styles.tabRow}>
          {[
            { key: "descripcion", label: "📋 Descripción" },
            { key: "incluye", label: "🎁 ¿Qué incluye?" },
            { key: "beneficios", label: "✅ Beneficios" },
            { key: "faq", label: "❓ Preguntas" },
            { key: "resenas", label: "⭐ Reseñas" },
          ].map((t) => (
            <button
              key={t.key}
              style={styles.tab(activeTab === t.key)}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "descripcion" && (
          <div style={{ maxWidth: "800px", lineHeight: 1.8, color: "#333" }}>
            <h2 style={{ color: COLORS.teal, fontWeight: 800, fontSize: "1.5rem", marginBottom: "16px" }}>
              🎉 fiesta Print Pro — La solución definitiva para decorar cumpleaños
            </h2>
            <p>
              ¿Tienes un cumpleaños próximo y quieres que quede increíble sin gastar una fortuna?
              <strong> fiesta Print Pro</strong> es el kit digital más completo del mercado con más de{" "}
              <strong>10.000 diseños profesionales</strong> listos para personalizar e imprimir desde casa.
            </p>
            <p>
              Olvídate de buscar diseñadores, esperar semanas o pagar precios exorbitantes.
              Con nuestro kit tienes <strong>todo lo que necesitas en un solo lugar</strong>,
              organizado por categorías y fácil de personalizar aunque no tengas experiencia en diseño.
            </p>
            <h3 style={{ color: COLORS.pink, fontWeight: 700, marginTop: "24px" }}>
              🌟 ¿Para quién es ideal?
            </h3>
            <ul style={{ paddingLeft: "20px" }}>
              {[
                "Mamás y papás que quieren sorprender a sus hijos sin gastar de más",
                "Organizadores de eventos que necesitan kits variados y económicos",
                "Personas creativas que disfrutan personalizar y manualidades",
                "Pequeños negocios de decoración que quieren ampliar su catálogo",
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
              ))}
            </ul>
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.pinkLight})`,
              borderRadius: "14px",
              padding: "20px 24px",
              marginTop: "24px",
            }}>
              <p style={{ fontWeight: 700, color: COLORS.dark, margin: 0, fontSize: "1rem" }}>
                💡 Tip: Imprime tus diseños en papel fotográfico para un resultado aún más
                profesional. ¡Tus invitados no creerán que lo hiciste tú mismo!
              </p>
            </div>
          </div>
        )}

        {activeTab === "incluye" && (
          <div>
            <h2 style={{ color: COLORS.teal, fontWeight: 800, fontSize: "1.5rem", marginBottom: "8px" }}>
              🎁 Todo lo que viene en tu kit
            </h2>
            <p style={{ color: "#666", marginBottom: "24px", fontSize: "0.9rem" }}>
              Más de <strong>121 archivos</strong> organizados en 10 categorías para decorar cada rincón de tu fiesta.
            </p>
            <div style={styles.includesGrid} className="includes-grid">
              {includes.map((item, i) => (
                <div key={i} style={styles.includeItem}>
                  <span style={styles.includeIcon}>{item.icon}</span>
                  <div>
                    <p style={styles.includeName}>{item.name}</p>
                    <p style={styles.includeQty}>{item.qty}</p>
                  </div>
                  <span style={{ marginLeft: "auto", color: COLORS.teal, fontWeight: 700 }}>✓</span>
                </div>
              ))}
            </div>
            <div style={{
              background: COLORS.pinkPale,
              borderRadius: "14px",
              padding: "20px 24px",
              border: `1px solid ${COLORS.pinkLight}`,
              textAlign: "center",
            }}>
              <p style={{ fontWeight: 800, fontSize: "1.1rem", color: COLORS.teal, margin: "0 0 4px" }}>
                🎉 BONUS: +10 Regalos exclusivos
              </p>
              <p style={{ color: "#666", margin: 0, fontSize: "0.88rem" }}>
                Al comprar hoy recibes 10 diseños extra sorpresa adicionales sin costo.
              </p>
            </div>
          </div>
        )}

        {activeTab === "beneficios" && (
          <div>
            <h2 style={{ color: COLORS.teal, fontWeight: 800, fontSize: "1.5rem", marginBottom: "8px" }}>
              ✅ ¿Por qué elegir fiesta Print Pro?
            </h2>
            <p style={{ color: "#666", marginBottom: "28px", fontSize: "0.9rem" }}>
              Más de <strong>5.000 familias</strong> ya decoraron sus fiestas con nuestros kits.
            </p>
            <div style={styles.benefitsGrid} className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} style={styles.benefitCard} className="benefit-card">
                  <div style={styles.benefitIcon}>{b.icon}</div>
                  <p style={styles.benefitTitle}>{b.title}</p>
                  <p style={styles.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
            {/* Comparison table */}
            <h3 style={{ color: COLORS.dark, fontWeight: 700, marginBottom: "16px", marginTop: "8px" }}>
              🆚 fiesta Print Pro vs. Decoración tradicional
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <thead>
                  <tr style={{ background: COLORS.tealLight }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Característica</th>
                    <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: COLORS.teal }}>fiesta Print Pro</th>
                    <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: "#888" }}>Decoración tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Precio total", "USD $17", "USD $80–$200+"],
                    ["Tiempo de preparación", "2 horas o menos", "2–4 días"],
                    ["Personalización", "Total y en minutos", "Limitada y costosa"],
                    ["Disponibilidad", "Descarga inmediata", "Esperar envío"],
                    ["Cantidad de diseños", "+10.000", "10–30 piezas"],
                    ["Calidad del resultado", "Profesional", "Variable"],
                  ].map(([feat, pro, trad], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : COLORS.pinkPale }}>
                      <td style={{ padding: "12px 16px", fontWeight: 500 }}>{feat}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: COLORS.teal, fontWeight: 700 }}>✓ {pro}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: "#888" }}>✗ {trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div style={{ maxWidth: "720px" }}>
            <h2 style={{ color: COLORS.teal, fontWeight: 800, fontSize: "1.5rem", marginBottom: "24px" }}>
              ❓ Preguntas frecuentes
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={styles.faqItem}>
                <div
                  style={styles.faqQuestion(openFaq === i)}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: "1.2rem",
                    color: COLORS.teal,
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    display: "inline-block",
                  }}>
                    ▾
                  </span>
                </div>
                {openFaq === i && (
                  <div style={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "resenas" && (
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              background: COLORS.pinkPale,
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "28px",
              border: `1px solid ${COLORS.pinkLight}`,
              flexWrap: "wrap",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3.5rem", fontWeight: 900, color: COLORS.teal, lineHeight: 1 }}>4.9</div>
                <StarRating count={5} />
                <div style={{ fontSize: "0.8rem", color: "#888", marginTop: "4px" }}>128 reseñas</div>
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                {[5, 4, 3, 2, 1].map((star) => {
                  const widths = [88, 8, 2, 1, 1];
                  return (
                    <div key={star} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.8rem", minWidth: "20px", color: "#555" }}>{star}★</span>
                      <div style={{ flex: 1, background: "#eee", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                        <div style={{
                          width: `${widths[5 - star]}%`,
                          background: COLORS.yellow,
                          height: "100%",
                          borderRadius: "4px",
                        }} />
                      </div>
                      <span style={{ fontSize: "0.78rem", color: "#888", minWidth: "30px" }}>{widths[5 - star]}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={styles.reviewsGrid} className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} style={styles.reviewCard}>
                  <div style={styles.reviewHeader}>
                    <div>
                      <div style={styles.reviewName}>{r.name}</div>
                      <StarRating count={r.stars} />
                    </div>
                    <span style={styles.reviewDate}>{r.date}</span>
                  </div>
                  <p style={styles.reviewComment}>"{r.comment}"</p>
                  <div style={{ marginTop: "10px", fontSize: "0.75rem", color: COLORS.teal, fontWeight: 600 }}>
                    ✓ Compra verificada
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div style={styles.ctaBanner}>
          <p style={{ fontSize: "0.9rem", color: COLORS.teal, fontWeight: 700, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "1px" }}>
            🎉 Oferta especial por tiempo limitado
          </p>
          <h2 style={styles.ctaTitle} className="cta-title">
            ¡Decora la fiesta perfecta sin gastar de más!
          </h2>
          <p style={styles.ctaSubtitle}>
            Únete a más de 5.000 familias que ya usaron fiesta Print Pro para crear cumpleaños increíbles.
          </p>
          <div style={styles.ctaPrice}>
            USD $17.00
            <span style={{ fontSize: "1rem", fontWeight: 500, color: "#888", marginLeft: "12px", textDecoration: "line-through" }}>$49.00</span>
          </div>
          <button
            style={{
              background: `linear-gradient(135deg, ${COLORS.teal}, ${COLORS.tealMid})`,
              color: COLORS.white,
              border: "none",
              borderRadius: "16px",
              padding: "20px 48px",
              fontSize: "1.2rem",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: `0 8px 32px rgba(37,169,162,0.4)`,
              transition: "all 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={handleBuy}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,169,162,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,169,162,0.4)";
            }}
          >
            <span>⚡</span> Obtener mi kit ahora
          </button>
          <p style={{ fontSize: "0.78rem", color: "#666", marginTop: "16px" }}>
            🔒 Pago seguro · 📥 Descarga instantánea · ↩️ Garantía 7 días
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid} className="footer-grid">
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.3rem", color: COLORS.white, marginBottom: "12px" }}>
              🎉 hazlo ahora
            </div>
            <p style={{ fontSize: "0.85rem", color: "#aaa", lineHeight: 1.7, margin: 0 }}>
              Tu tienda digital de kits para fiestas infantiles. Más de 10.000 diseños listos para imprimir y personalizar desde casa.
            </p>
          </div>
          <div>
            <p style={styles.footerTitle}>Navegar</p>
            {["Inicio", "Kits digitales", "Cómo funciona", "Blog", "Contacto"].map((link) => (
              <a key={link} style={styles.footerLink} className="footer-link" href="#">{link}</a>
            ))}
          </div>
          <div>
            <p style={styles.footerTitle}>Soporte</p>
            {["Preguntas frecuentes", "Política de devoluciones", "Términos y condiciones", "Privacidad"].map((link) => (
              <a key={link} style={styles.footerLink} className="footer-link" href="#">{link}</a>
            ))}
            <div style={{ marginTop: "16px" }}>
              <p style={{ color: "#aaa", fontSize: "0.82rem", margin: "0 0 8px" }}>Síguenos:</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {["📘", "📸", "🎵"].map((icon, i) => (
                  <span key={i} style={{
                    background: "#222",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    transition: "background 0.2s",
                  }}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={{ margin: 0 }}>
            © 2025 hazlo ahora — Tienda Digital DK. Todos los derechos reservados.
            {/* TODO: Añadir links legales reales */}
          </p>
        </div>
      </footer>
    </div>
  );
}