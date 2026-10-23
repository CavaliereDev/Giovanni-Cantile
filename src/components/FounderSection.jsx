import React from 'react';
import { Award, GraduationCap, ShieldCheck, Instagram, Video, ArrowRight, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function FounderSection({ onOpenConsultation }) {
  const { founder, partner } = SITE_CONFIG;

  return (
    <section
      id="chi-sono"
      style={{
        padding: '7rem 0',
        backgroundColor: 'var(--emerald-950)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Ambient Radial */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(36, 124, 61, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Photos & Visual Column */}
          <div style={{ position: 'relative' }}>
            {/* Primary Portrait Card */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1.5px solid rgba(212, 167, 55, 0.35)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                aspectRatio: '4/5',
                maxHeight: '520px',
                margin: '0 auto',
                backgroundColor: 'var(--emerald-900)',
              }}
            >
              <img
                src={founder.imageMain}
                alt={founder.fullName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.src = founder.imageAlt;
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(6, 25, 12, 0.9) 0%, rgba(6, 25, 12, 0.2) 50%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(212, 167, 55, 0.25)',
                    border: '1px solid rgba(212, 167, 55, 0.5)',
                    color: '#edd28e',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderRadius: '4px',
                    marginBottom: '0.4rem',
                  }}
                >
                  Iscritto all'Albo OCF
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  {founder.fullName}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#edd28e', fontWeight: 500 }}>
                  {founder.title}
                </p>
              </div>
            </div>

            {/* Social Proof Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '0',
                background: 'rgba(15, 54, 26, 0.92)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 167, 55, 0.4)',
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #dfb957 0%, #b88b22 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-950)',
                  fontWeight: 700,
                }}
              >
                <Award size={22} />
              </div>
              <div>
                <div
                  className="tabular-nums"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                  }}
                >
                  {founder.socialFollowers}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Follower sui social
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Credentials Column */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <ShieldCheck size={14} />
              <span>Etica & Competenza Tecnica</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Al Tuo Fianco Senza <br />
              <span className="gold-gradient-text-light" style={{ fontStyle: 'italic' }}>
                Conflitti d'Interesse
              </span>
            </h2>

            {/* Blockquote */}
            <div
              style={{
                borderLeft: '3px solid #d4a737',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '1.25rem',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  color: '#edd28e',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  marginBottom: '0.5rem',
                }}
              >
                "{founder.quote}"
              </p>
              <cite style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', fontStyle: 'normal' }}>
                — {founder.fullName}
              </cite>
            </div>

            {/* Detailed Story */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                color: 'rgba(255, 255, 255, 0.82)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              <p>
                Il mio percorso nel mondo della finanza affonda le radici in una solida formazione accademica,
                culminata con la <strong>laurea in Economia Aziendale</strong>. Spinto dalla volontà
                di operare con la massima trasparenza, ho conseguito l'abilitazione come{' '}
                <strong>Consulente Finanziario Indipendente</strong> (iscritto all'Albo OCF).
              </p>
              <p>
                Da oltre due anni porto la mia esperienza anche sui canali social, dove mi dedico quotidianamente
                alla divulgazione di temi finanziari per rendere il mondo degli investimenti più accessibile,
                trasparente e libero dalle asimmetrie informative delle banche.
              </p>
              <p>
                Oggi metto queste competenze al servizio dei risparmiatori collaborando con{' '}
                <strong style={{ color: '#ffffff' }}>IoInvesto SCF</strong>, una delle principali Società di
                Consulenza Finanziaria in Italia, offrendo strategie patrimoniali orientate unicamente
                ai tuoi traguardi personali.
              </p>
            </div>

            {/* IoInvesto SCF Partner Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '2.5rem',
              }}
            >
              <img
                src={partner.logo}
                alt="IoInvesto SCF Logo"
                style={{
                  height: '42px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#edd28e', fontWeight: 600 }}>
                  Collaborazione Istituzionale
                </div>
                <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                  {partner.name} — {partner.role}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {partner.address}
                </div>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
              <button onClick={onOpenConsultation} className="btn-gold">
                <span>Prenota Colloquio con il Dott. Giovanni</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4a737';
                    e.currentTarget.style.color = '#06190c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  title="Segui su Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={founder.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4a737';
                    e.currentTarget.style.color = '#06190c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  title="Segui su TikTok"
                >
                  <Video size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
