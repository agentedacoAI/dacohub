import { useState } from "react";

// ============== ICONS ==============
const Icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.21l-.304-.18-2.871.853.853-2.871-.18-.304A8 8 0 1112 20z" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8 2.5A10 10 0 004 6" strokeLinecap="round" />
      <path d="M16 2.5A10 10 0 0120 6" strokeLinecap="round" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <rect x="7" y="14" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  clients: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M6 2L3 7v13a2 2 0 002 2h14a2 2 0 002-2V7l-3-5z" />
      <path d="M3 7h18" />
      <path d="M16 11a4 4 0 01-8 0" />
    </svg>
  ),
  products: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 10-16 0" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 9h8M8 13h4" strokeLinecap="round" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M12 8l3 3-3 3M9 8l-3 3 3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <path d="M1 1l22 22" strokeLinecap="round" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ============== SIDEBAR ==============
const sidebarItems = [
  { id: "instagram", icon: Icons.instagram, label: "INSTAGRAM" },
  { id: "whatsapp", icon: Icons.whatsapp, label: "WHATSAPP" },
  { id: "dashboard", icon: Icons.dashboard, label: "DASHBOARD IA" },
  { id: "funnel", icon: Icons.funnel, label: "FUNIL" },
  { id: "calendar", icon: Icons.calendar, label: "AGENDA" },
  { id: "clients", icon: Icons.clients, label: "CLIENTES" },
  { id: "store", icon: Icons.store, label: "PONTO DE VENDA" },
  { id: "products", icon: Icons.products, label: "PRODUTOS E SERVIÇOS" },
  { id: "home", icon: Icons.menu, label: "MENU INICIAL" },
  { id: "settings", icon: Icons.settings, label: "CONFIGURAÇÕES" },
];

function Sidebar({ currentPage, onNavigate }) {
  return (
    <div className="fixed left-0 top-0 h-screen w-24 flex flex-col items-center py-6 z-50"
      style={{
        background: "linear-gradient(180deg, rgba(15,15,15,0.98) 0%, rgba(10,10,10,0.99) 100%)",
        borderRight: "1px solid rgba(255,60,60,0.15)",
      }}>
      {/* Logo */}
      <div className="mb-8 text-center">
        <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", lineHeight: 1, letterSpacing: "2px" }}>
          DACO
        </div>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", lineHeight: 1, letterSpacing: "2px" }}>
          HUB<span style={{ color: "#FF4C3B" }}>.</span>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col items-center gap-1 flex-1 overflow-y-auto w-full px-2"
        style={{ scrollbarWidth: "none" }}>
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col items-center gap-1 py-3 px-1 rounded-xl w-full transition-all duration-300 group"
            style={{
              background: currentPage === item.id
                ? "linear-gradient(135deg, rgba(255,76,59,0.2), rgba(255,76,59,0.05))"
                : "transparent",
              border: currentPage === item.id
                ? "1px solid rgba(255,76,59,0.3)"
                : "1px solid transparent",
            }}
          >
            <div
              className="transition-all duration-300"
              style={{
                color: currentPage === item.id ? "#FF4C3B" : "rgba(255,255,255,0.5)",
              }}
            >
              {item.icon}
            </div>
            <span
              className="transition-all duration-300"
              style={{
                fontSize: "8px",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 500,
                letterSpacing: "1px",
                color: currentPage === item.id ? "#FF4C3B" : "rgba(255,255,255,0.4)",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== LOGIN PAGE ==============
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ background: "#0a0a0a" }}>
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(255,76,59,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,76,59,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Circles decoration */}
      <div className="absolute" style={{ right: "10%", top: "15%" }}>
        {[280, 220, 160].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: "1px solid rgba(255,76,59,0.15)",
              top: `${i * 30}px`,
              left: `${i * 25}px`,
              animation: `pulse ${3 + i}s ease-in-out infinite`,
            }}
          />
        ))}
        {/* Logo D. */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 120,
            height: 120,
            top: "80px",
            left: "80px",
            background: "#1a1a1a",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "48px", color: "#fff" }}>
            D<span style={{ color: "#FF4C3B" }}>.</span>
          </span>
        </div>
      </div>

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-md p-10 rounded-3xl"
        style={{
          background: "rgba(20,20,20,0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "8px",
          }}>
            BEM VINDO À OUTRO <span style={{ color: "#FF4C3B" }}>NÍVEL</span>
          </p>
          <h1 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "52px",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "2px",
          }}>
            DACO<br />HUB<span style={{ color: "#FF4C3B" }}>.</span>
          </h1>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <div>
            <label style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "6px",
              display: "block",
            }}>
              E-MAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "2px solid transparent",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#1a1a1a",
              }}
              onFocus={(e) => e.target.style.borderColor = "#FF4C3B"}
              onBlur={(e) => e.target.style.borderColor = "transparent"}
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "6px",
              display: "block",
            }}>
              SENHA
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 pr-12"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "2px solid transparent",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => e.target.style.borderColor = "#FF4C3B"}
                onBlur={(e) => e.target.style.borderColor = "transparent"}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "#999" }}
              >
                {showPw ? Icons.eyeOff : Icons.eye}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl font-bold transition-all duration-300 mt-2"
            style={{
              background: loading
                ? "rgba(255,76,59,0.5)"
                : "linear-gradient(135deg, #FF4C3B, #FF6B5A)",
              color: "#fff",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "16px",
              letterSpacing: "3px",
              border: "none",
              cursor: loading ? "wait" : "pointer",
              boxShadow: "0 10px 30px rgba(255,76,59,0.3)",
              transform: loading ? "scale(0.98)" : "scale(1)",
            }}
            disabled={loading}
          >
            {loading ? "ENTRANDO..." : "ENTRAR"}
          </button>

          <p className="text-center mt-2" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
          }}>
            Esqueceu a senha? <span style={{ color: "#FF4C3B", cursor: "pointer" }}>Recuperar</span>
          </p>
        </div>
      </div>

    </div>
  );
}

// ============== METRIC CARD ==============
function MetricCard({ icon, title, whatsapp, instagram, delay }) {
  return (
    <div
      className="rounded-2xl p-6 flex items-center gap-6 transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, rgba(30,30,30,0.8), rgba(20,20,20,0.6))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,76,59,0.1)",
        animation: `slideUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div className="flex-shrink-0" style={{ color: "rgba(255,255,255,0.8)" }}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "2px",
          color: "#FF4C3B",
          marginBottom: "8px",
        }}>
          {title}
        </h3>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#25D366" }} />
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#fff",
            }}>
              {whatsapp} <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>WHATSAPP</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#E1306C" }} />
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#fff",
            }}>
              {instagram} <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>INSTAGRAM</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== DASHBOARD PAGE ==============
function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "32px",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "2px",
        }}>
          MENU INICIAL
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.4)",
          marginTop: "4px",
        }}>
          Visão geral dos últimos 7 dias
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-2xl">
        <MetricCard
          icon={Icons.contact}
          title="CONTATOS - ÚLTIMOS 7 DIAS"
          whatsapp="120"
          instagram="500"
          delay={100}
        />
        <MetricCard
          icon={Icons.chat}
          title="CONVERSAS - ÚLTIMOS 7 DIAS"
          whatsapp="98"
          instagram="112"
          delay={200}
        />
        <MetricCard
          icon={Icons.message}
          title="MENSAGENS - ÚLTIMOS 7 DIAS"
          whatsapp="98"
          instagram="38"
          delay={300}
        />
      </div>

    </div>
  );
}

// ============== WHATSAPP PAGE ==============
function WhatsAppPage() {
  return (
    <div style={{
      position: "fixed",
      top: 64,
      left: 96,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      zIndex: 30,
      background: "#0a0a0a",
    }}>
      <iframe
        src="https://chat.agentedaco.com.br/app/accounts/1/conversations?inbox[]=2"
        style={{
          border: "none",
          display: "block",
          position: "relative",
          left: -200,
          width: "calc(100% + 200px)",
          height: "100%",
        }}
        title="WhatsApp"
      />
    </div>
  );
}
// ============== PLACEHOLDER PAGES ==============
function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="p-8">
      <h1 style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: "32px",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "2px",
      }}>
        {title}
      </h1>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: "rgba(255,255,255,0.4)",
        marginTop: "4px",
      }}>
        {subtitle}
      </p>
      <div
        className="mt-8 rounded-2xl p-12 flex items-center justify-center"
        style={{
          background: "rgba(30,30,30,0.5)",
          border: "1px solid rgba(255,76,59,0.1)",
          minHeight: "300px",
        }}
      >
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "18px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "3px",
        }}>
          EM BREVE
        </p>
      </div>
    </div>
  );
}

// ============== MAIN APP ==============
export default function DacoHub() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <DashboardPage />;
      case "whatsapp":
        return <WhatsAppPage />;
      case "instagram":
        return <PlaceholderPage title="INSTAGRAM" subtitle="Direct messages em tempo real" />;
      case "dashboard":
        return <PlaceholderPage title="DASHBOARD IA" subtitle="Métricas e monitoramento dos agentes" />;
      case "funnel":
        return <PlaceholderPage title="FUNIL" subtitle="Pipeline de vendas e leads" />;
      case "calendar":
        return <PlaceholderPage title="AGENDA" subtitle="Agendamentos e compromissos" />;
      case "clients":
        return <PlaceholderPage title="CLIENTES" subtitle="Gestão de contatos e leads" />;
      case "store":
        return <PlaceholderPage title="PONTO DE VENDA" subtitle="Vendas e transações" />;
      case "products":
        return <PlaceholderPage title="PRODUTOS E SERVIÇOS" subtitle="Cadastro e gerenciamento" />;
      case "settings":
        return <PlaceholderPage title="CONFIGURAÇÕES" subtitle="Personalização e integrações" />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Top Bar */}
      <div
        className="fixed top-0 right-0 h-16 flex items-center justify-end px-8 z-40"
        style={{
          left: "96px",
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
            }}>
              Daco Digital
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
            }}>
              Administrador
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #FF4C3B, #FF6B5A)",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              color: "#fff",
              fontSize: "14px",
            }}
          >
            DD
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="ml-2 p-2 rounded-lg transition-all duration-300"
            style={{
              color: "rgba(255,255,255,0.3)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            title="Sair"
          >
            {Icons.logout}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: "96px", paddingTop: "64px" }}>
        {renderPage()}
      </div>
    </div>
  );
}
