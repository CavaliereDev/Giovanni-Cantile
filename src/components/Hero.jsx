import React from 'react';
import { ShieldCheck, Calculator, ArrowRight, CheckCircle2, Instagram, Video, Users, Sparkles } from 'lucide-react';
import { SITE_CONFIG, KEY_STATS } from '../data/content';

export default function Hero({ onOpenConsultation, onScrollToIntake, onScrollToCalculator }) {
  const { founder, partner } = SITE_CONFIG;

  return (
    <section
      id="home"
      className="emerald-hero-gradient"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Geometric Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(212, 167, 55, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: The Proposition & Service */}
          <div>
            {/* Trust & OCF Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                background: 'rgba(15, 54, 26, 0.75)',
                border: '1px solid rgba(212, 167, 55, 0.35)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                marginBottom: '1.5rem',
              }}
            >
              <ShieldCheck size={16} color="#d4a737" />
              <span
                style={{
                  color: '#edd28e',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {founder.credentials}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.12,
                marginBottom: '1.25rem',
              }}
            >
              Consulenza Finanziaria Autonoma con{' '}
              <span className="gold-gradient-text-light" style={{ fontStyle: 'italic' }}>
                {founder.fullName}
              </span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: 300,
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Lavoro solo a parcella, senza prodotti da piazzare né mandati bancari:{' '}
              <strong style={{ color: '#edd28e', fontWeight: 600 }}>zero provvigioni</strong> e zero conflitti.
              Proteggo il tuo patrimonio e ti aiuto a recuperare fino al{' '}
              <strong style={{ color: '#edd28e', fontWeight: 600 }}>40% dei rendimenti</strong> erosi
              da costi occulti.
            </p>

            {/* Social Proof Micro-Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '2.5rem',
                width: 'fit-content',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={16} color="#edd28e" />
                <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                  {founder.socialFollowers} persone
                </span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  mi seguono sui social
                </span>
              </div>

              <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#edd28e',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <Instagram size={14} />
                  <span>Instagram</span>
                </a>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>•</span>
                <a
                  href={founder.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#edd28e',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <Video size={14} />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <button
                onClick={onScrollToIntake}
                className="btn-gold"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '1.02rem',
                }}
              >
                <span>Fai il Check-Up Gratuito</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="btn-outline-white"
                style={{
                  padding: '1rem 1.85rem',
                  fontSize: '1.02rem',
                }}
              >
                <Calculator size={18} color="#d4a737" />
                <span>Simula Risparmio Costi</span>
              </button>
            </div>
          </div>

          {/* Right Column: Giovanni Cantile Spotlight Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-emerald-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                maxWidth: '440px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              {/* Photo Frame */}
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  position: 'relative',
                  marginBottom: '1.25rem',
                  border: '1.5px solid rgba(212, 167, 55, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={founder.imageMain}
                  alt={founder.fullName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(6, 25, 12, 0.85) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      color: '#edd28e',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                    }}
                  >
                    Il Tuo Referente Unico
                  </span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                    {founder.fullName}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {founder.title}
                  </div>
                </div>
              </div>

              {/* Personal Guarantee Box */}
              <div
                style={{
                  padding: '1rem 1.15rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#edd28e', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <Sparkles size={14} />
                  <span>Nessun intermediario o call center</span>
                </div>
                <div>
                  Parli direttamente con me, analizziamo i tuoi contratti e decidiamo insieme la strategia migliore.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {KEY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-emerald-card"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#edd28e',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.badge}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                <span className="gold-gradient-text-light">{stat.value}</span>
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.label}
              </div>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.45,
                  fontWeight: 300,
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
