import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Sparkles, Camera, Globe2, ArrowRight } from "lucide-react";
const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
};

const sectionStyle = {
  padding: "6rem 0",
  borderBottom: "1px solid #eee",
};
export default function Header() {
  const location = useLocation();

  return (
    <header style={{ padding: "1rem 0", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 50 }}>
        <div style={{ ...containerStyle, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#6b21a8" }}>DermaAI</div>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#analysis" style={{ textDecoration: "none", color: "#333" }}>Analysis</a>
            <a href="#savings" style={{ textDecoration: "none", color: "#333" }}>Time & Money</a>
            <a href="#personalized" style={{ textDecoration: "none", color: "#333" }}>Personalized</a>
            <a href="#privacy" style={{ textDecoration: "none", color: "#333" }}>Privacy</a>
            <a href="#anywhere" style={{ textDecoration: "none", color: "#333" }}>Anywhere</a>
          </nav>
          <a href="#cta" style={{ padding: "0.5rem 1rem", background: "#6b21a8", color: "white", borderRadius: "8px", textDecoration: "none" }}>Try It</a>
        </div>
      </header>
  );
}
