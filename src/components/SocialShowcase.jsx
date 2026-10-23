import React from 'react';
import { Instagram, Video, Users, ArrowUpRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_TOPICS } from '../data/content';

export default function SocialShowcase({ onOpenConsultation }) {
  const { founder } = SITE_CONFIG;

  return (
    <section
      id="social"
      style={{
        padding: '6.5rem 0',
        backgroundColor: 'var(--emerald-950)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212, 167, 55, 0.25)',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 167, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Users size={14} />
            <span>Divulgazione & Community Ufficiale</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Oltre <span className="gold-gradient-text-light">{founder.socialFollowers}</span> Risparmiatori
            Mi Seguono per Svelare la Verità sui Soldi
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.82)',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Ogni giorno porto sui miei canali social analisi oggettive, spiegazioni pratiche su ETF e
            confronti con i fondi bancari, senza filtri e senza conflitti d'interesse.
          </p>
        </div>

        {/* Big Social Hub Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Instagram Main Card */}
          <div
            className="glass-emerald-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 8px 20px rgba(221, 42, 123, 0.35)',
                  }}
                >
                  <Instagram size={28} />
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#edd28e',
                    fontWeight: 600,
                  }}
                >
                  Instagram
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.4rem', color: '#ffffff' }}>
                @giovanni.cantile.cfa
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.25rem' }}>
                Anche su @finanza101
              </p>

              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Reel giornalieri, storie di approfondimento sui mercati, risposte ai dubbi dei follower e
                consigli pratici per evitare gli errori più costosi nella gestione patrimoniale.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ flex: 1, textDecoration: 'none', padding: '0.8rem 1.25rem', fontSize: '0.9rem' }}
              >
                <Instagram size={17} />
                <span>Seguimi su Instagram</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href={founder.instagramFinanza101}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
                style={{ textDecoration: 'none', padding: '0.8rem 1.25rem', fontSize: '0.9rem' }}
              >
                <span>@finanza101</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* TikTok Main Card */}
          <div
            className="glass-emerald-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: '#000000',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Video size={28} color="#00f2fe" />
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#edd28e',
                    fontWeight: 600,
                  }}
                >
                  TikTok
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.4rem', color: '#ffffff' }}>
                @finanza101
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.25rem' }}>
                Video pillole veloci & dirette
              </p>

              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Concetti finanziari complessi spiegati con semplicità e rigore matematico: come leggere i prospetti informativi (KID), cosa nascondono le polizze e come investire con gli ETF.
              </p>
            </div>

            <a
              href={founder.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
              style={{ width: '100%', textDecoration: 'none', padding: '0.8rem', justifyContent: 'center' }}
            >
              <Video size={17} color="#d4a737" />
              <span>Guarda i Video su TikTok</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Popular Content Pillars on Social */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-serif)', color: '#ffffff', fontWeight: 700 }}>
              I Temi Più Seguiti dalla Community
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {SOCIAL_TOPICS.map((topic, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    color: '#edd28e',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '0.65rem',
                  }}
                >
                  <span>{topic.badge}</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{topic.platform}</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {topic.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Link to Intake Consultation */}
        <div
          style={{
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(28, 98, 48, 0.4) 0%, rgba(10, 38, 19, 0.7) 100%)',
            border: '1.5px solid rgba(212, 167, 55, 0.35)',
            maxWidth: '760px',
            margin: '0 auto',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}
          >
            Hai visto un mio video e vuoi analizzare la tua situazione?
          </h3>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.98rem',
              marginBottom: '1.5rem',
            }}
          >
            Compila il questionario rapido in 4 punti: riceverai una risposta direttamente da me su WhatsApp.
          </p>
          <button onClick={onOpenConsultation} className="btn-gold" style={{ padding: '0.9rem 2rem' }}>
            <span>Inizia il Questionario di Check-Up</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
