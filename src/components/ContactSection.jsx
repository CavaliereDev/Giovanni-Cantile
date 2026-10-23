import React from 'react';
import { Mail, Phone, MapPin, Instagram, Video, MessageSquare, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import IntakeForm from './IntakeForm';

export default function ContactSection({ onOpenPrivacy }) {
  const { founder } = SITE_CONFIG;

  const whatsappDirectUrl = `https://wa.me/${founder.phoneDigits}?text=${encodeURIComponent(
    'Ciao Giovanni, vorrei richiedere informazioni per una prima consulenza orientativa sul mio portafoglio.'
  )}`;

  return (
    <section
      id="contatti"
      style={{
        padding: '7rem 0',
        backgroundColor: 'var(--emerald-950)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Intro */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Consulenza Finanziaria Autonoma</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Hai dei dubbi su come sono investiti i tuoi{' '}
            <span className="gold-gradient-text-light" style={{ fontStyle: 'italic' }}>
              soldi?
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Lavoro solo a parcella — pagato da te, da nessun altro. Niente prodotti da piazzare,{' '}
            <strong style={{ color: '#edd28e' }}>zero provvigioni</strong>. Prima di sentirci, due minuti
            per inquadrare la tua situazione.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info, Socials & WhatsApp */}
          <div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(212, 167, 55, 0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #d4a737',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={founder.imageMain}
                    alt={founder.fullName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                    {founder.fullName}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#edd28e' }}>
                    {founder.title}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {founder.credentials}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>
                "{founder.quote}"
              </p>

              {/* Direct WhatsApp Callout */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  border: '1.5px solid rgba(37, 211, 102, 0.4)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  marginBottom: '1.5rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.15)')}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#86efac', fontWeight: 700 }}>
                    WhatsApp Diretto
                  </div>
                  <div className="tabular-nums" style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                    {founder.phone}
                  </div>
                </div>
              </a>

              {/* Phone & Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={`tel:${founder.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  <Phone size={16} color="#d4a737" />
                  <span className="tabular-nums">Chiamata: {founder.phone}</span>
                </a>

                <a
                  href={`mailto:${founder.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  <Mail size={16} color="#d4a737" />
                  <span>Email: {founder.email}</span>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.85rem',
                  }}
                >
                  <MapPin size={16} color="#d4a737" />
                  <span>{founder.location}</span>
                </div>
              </div>
            </div>

            {/* Social Connect Badge */}
            <div
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#edd28e', marginBottom: '0.5rem' }}>
                Seguimi sui Canali Ufficiali
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Unisciti a oltre 10.000 persone che si informano su Instagram e TikTok per investire con consapevolezza.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                  style={{ flex: 1, textDecoration: 'none', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={founder.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                  style={{ flex: 1, textDecoration: 'none', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                >
                  <Video size={16} />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Intake Form */}
          <div>
            <IntakeForm onOpenPrivacy={onOpenPrivacy} />
          </div>
        </div>
      </div>
    </section>
  );
}
