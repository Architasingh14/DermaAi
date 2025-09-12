import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Camera,
  Globe2,
  ArrowRight,
} from "lucide-react";

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

function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  points,
  icon: Icon,
  image,
  flip,
}) {
  return (
    <section id={id} style={sectionStyle}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            flexDirection: flip ? "row-reverse" : "row",
          }}
        >
          {/* Text Side */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#6b21a8",
                fontWeight: "600",
              }}
            >
              <Icon size={20} />
              <span>{eyebrow}</span>
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", margin: "1rem 0" }}>
              {title}
            </h2>
            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              {description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {points.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#6b21a8",
                      display: "inline-block",
                    }}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            aria-hidden
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function DermaAILanding() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: "#111",
        background: "white",
      }}
    >
      {/* HERO */}
      <section
        style={{
          ...sectionStyle,
          background: "linear-gradient(135deg, #fdf4ff, #ede9fe)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#6b21a8",
                fontWeight: "600",
              }}
            >
              <Sparkles size={20} />
              <span>Your personal skin expert</span>
            </p>
            <h1
              style={{ fontSize: "3rem", fontWeight: "800", margin: "1rem 0" }}
            >
              Understand your skin, instantly.
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.6",
                color: "#444",
                marginBottom: "1.5rem",
              }}
            >
              With DermaAI, get quick insights, personalized routines, and
              guidance for healthier skin—anytime, anywhere.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <a
                href="#cta"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "#6b21a8",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Try It Now <ArrowRight size={18} />
              </a>
              <a
                href="#disclaimer"
                style={{ textDecoration: "underline", color: "#6b21a8" }}
              >
                Read disclaimer
              </a>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              Fast • Private • Works on mobile and desktop
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            aria-hidden
          >
            <img
              src="https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000025623785.jpg?resize=878"
              alt="Hero Skincare"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Sections with Unique Images */}
      <FeatureSection
        id="analysis"
        eyebrow="Instant Skin Analysis"
        title="Point, snap, and get AI-powered insights"
        description="Upload a clear photo or describe symptoms. DermaAI analyzes common concerns like acne, rashes, pigmentation, and dryness in seconds."
        points={[
          "Detection within seconds—no waiting rooms",
          "Helps with early identification and next steps",
          "Simple guidance you can act on today",
        ]}
        icon={Camera}
        image="https://media.istockphoto.com/id/1619435136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%BC-%D0%B3%D0%B5%D0%BB%D1%8F-%D0%B4%D0%BB%D1%8F-%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%B3%D0%B5%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%BA%D0%BE%D0%B6%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%BE%D0%B9.jpg?s=612x612&w=0&k=20&c=PHVI8A7VOy88yiY2fFd6XHBhJsnWdcFNkxbYiOTesW0="
      />

      <FeatureSection
        id="savings"
        eyebrow="Save Time & Money"
        title="Skip queues and costly first visits"
        description="Get quick answers at home so you know when you actually need an appointment."
        points={[
          "Affordable first-line guidance",
          "No travel or scheduling hassle",
          "Triage to decide if a dermatologist visit is needed",
        ]}
        icon={Clock}
        flip
        image="https://avatars.mds.yandex.net/i?id=c895a8afa89d48492fe10edcc21a44ab6fe6ab49-4350294-images-thumbs&n=13"
      />

      <FeatureSection
        id="personalized"
        eyebrow="Personalized Routines"
        title="Guidance tailored to your skin"
        description="Receive science-backed recommendations, from basic routines to product suggestions aligned with your skin type and goals."
        points={[
          "Product ideas matched to skin type",
          "Simple, step-by-step care routines",
          "Everyday tips—not random internet hacks",
        ]}
        icon={Sparkles}
        image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/01/face-serum-1673948132.jpg"
      />

      <FeatureSection
        id="privacy"
        eyebrow="Privacy First"
        title="Your skin. Your data."
        description="We prioritize confidentiality with secure processing and strong safeguards."
        points={[
          "Secure handling of uploads",
          "No selling data to third parties",
          "Results kept confidential",
        ]}
        icon={ShieldCheck}
        flip
        image="https://avatars.mds.yandex.net/i?id=77f5e692f87b21f809d879ddb106276358f967ce-4338066-images-thumbs&n=13"
      />

      <FeatureSection
        id="anywhere"
        eyebrow="Available Anytime, Anywhere"
        title="Skin guidance that travels with you"
        description="DermaAI works across devices, 24/7—especially helpful if clinics are far away or appointments are hard to get."
        points={[
          "Works on mobile and desktop",
          "24/7 access when you need it",
          "Great for remote areas",
        ]}
        icon={Globe2}
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
      />

      {/* CTA */}
      <section id="cta" style={{ ...sectionStyle, textAlign: "center" }}>
        <div style={containerStyle}>
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              padding: "2rem",
              borderRadius: "16px",
              background: "#f9f5ff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem" }}>
              Ready to care for your skin—smarter?
            </h3>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
              Try DermaAI now and experience instant guidance and personalized
              routines.
            </p>
            <div>
              <a
                href="/dermaai"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "#6b21a8",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Try It <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section id="disclaimer" style={{ ...sectionStyle, background: "#fef2f2" }}>
        <div style={containerStyle}>
          <div
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              border: "1px solid #fecaca",
            }}
          >
            <h4
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
                color: "#b91c1c",
              }}
            >
              Important Disclaimer
            </h4>
            <p style={{ color: "#444", lineHeight: "1.6" }}>
              DermaAI is designed for <strong>minor skin concerns and general
              guidance only</strong>. If you have any{" "}
              <strong>
                serious, painful, spreading, or recurring skin condition
              </strong>
              , or symptoms like bleeding, severe swelling, fever, or infection,
              please consult a <strong>qualified dermatologist</strong> or seek
              medical care immediately.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#fafafa",
          padding: "2rem 0",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} DermaAI. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#privacy" style={{ textDecoration: "none", color: "#333" }}>
              Privacy
            </a>
            <a
              href="#disclaimer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Disclaimer
            </a>
            <a href="#cta" style={{ textDecoration: "none", color: "#333" }}>
              Try It
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
