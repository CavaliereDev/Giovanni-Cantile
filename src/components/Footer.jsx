import React from 'react';
import { ShieldCheck, Instagram, Video, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function Footer({ onNavigate, onOpenPrivacy }) {
  const { founder, partner } = SITE_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#05160b',
        color: '#ffffff',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '3px solid #d4a737',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1c6230 0%, #0a2613 100%)',
                  border: '1.5px solid #d4a737',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', color: '#d4a737', fontWeight: 700, fontSize: '1.1rem' }}>
                  F
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700 }}>
                Finanza<span style={{ color: '#d4a737' }}>101</span>
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Studio di consulenza e analisi finanziaria indipendente. Trasparenza radicale, etica deontologica
              e competenza quantitativa al servizio esclusivo del tuo patrimonio.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a737';
                  e.currentTarget.style.color = '#05160b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Instagram size={17} />
              </a>

              <a
                href={founder.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a737';
                  e.currentTarget.style.color = '#05160b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Video size={17} />
              </a>
            </div>
          </div>

          {/* IoInvesto SCF Partner Block */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#edd28e',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              In Collaborazione Con
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src={partner.logo}
                alt="IoInvesto SCF"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              {partner.role}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              {partner.address}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#edd28e',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Navigazione Rapida
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'chi-sono', label: 'Chi Sono — Dott. Cantile' },
                { id: 'protocollo', label: 'Protocollo Analisi' },
                { id: 'calcolatore', label: 'Calcolatore Costi Nascosti' },
                { id: 'guide', label: 'Guide & Elenco TER ETF' },
                { id: 'faq', label: 'Domande Frequenti (FAQ)' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contacts */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#edd28e',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Informazioni e Contatti
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <a
                href={`tel:${founder.phone}`}
                style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#edd28e')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
              >
                <Phone size={14} color="#d4a737" />
                <span className="tabular-nums">{founder.phone}</span>
              </a>

              <a
                href={`mailto:${founder.email}`}
                style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#edd28e')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
              >
                <Mail size={14} color="#d4a737" />
                <span>{founder.email}</span>
              </a>

              <div style={{ color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} color="#d4a737" />
                <span>Bergamo, Italia</span>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={onOpenPrivacy}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#edd28e',
                    fontSize: '0.82rem',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Privacy & Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {currentYear} {founder.fullName} — Finanza101 • P.IVA {founder.piva}. Tutti i diritti riservati.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4ade80' }}>
              <ShieldCheck size={14} />
              <span>Connessione SSL Crittografata & Conforme GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
