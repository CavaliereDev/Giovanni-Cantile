import React from 'react';
import { Unlock, ShieldAlert, BarChart3, Users, Quote } from 'lucide-react';
import { VALUES, SITE_CONFIG } from '../data/content';

export default function MissionSection() {
  const getIcon = (name) => {
    switch (name) {
      case 'Unlock':
        return <Unlock size={26} color="#d4a737" />;
      case 'ShieldAlert':
        return <ShieldAlert size={26} color="#d4a737" />;
      case 'BarChart3':
        return <BarChart3 size={26} color="#d4a737" />;
      case 'Users':
        return <Users size={26} color="#d4a737" />;
      default:
        return <BarChart3 size={26} color="#d4a737" />;
    }
  };

  return (
    <section
      id="missione"
      style={{
        padding: '7rem 0',
        backgroundColor: 'var(--bg-main)',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4.5rem' }}>
          <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
            <span>Etica Professionale & Principi Fiduciari</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              color: 'var(--emerald-950)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Guidati dalla Verità dei Numeri
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6 }}>
            Crediamo fermamente che ogni risparmiatore meriti di conoscere la verità oggettiva sul proprio denaro.
            La nostra missione è semplice: riportare il controllo, la serenità e il valore nelle mani di chi ha faticato per costruire il proprio capitale.
          </p>
        </div>

        {/* 4 Values Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem',
          }}
        >
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="glass-light-card"
              style={{
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--emerald-950)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 18px rgba(6, 25, 12, 0.15)',
                }}
              >
                {getIcon(val.icon)}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--emerald-950)',
                  marginBottom: '0.75rem',
                }}
              >
                {val.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Quotation Card */}
        <div
          style={{
            backgroundColor: 'var(--emerald-950)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2.5rem',
            border: '1.5px solid rgba(212, 167, 55, 0.3)',
            boxShadow: 'var(--shadow-xl)',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <Quote
            size={40}
            color="#d4a737"
            style={{ margin: '0 auto 1.5rem', opacity: 0.8 }}
          />

          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
              lineHeight: 1.5,
              color: '#ffffff',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            "{SITE_CONFIG.founder.quoteExtended}"
          </blockquote>

          <cite
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: '#edd28e',
              fontWeight: 600,
              fontStyle: 'normal',
              display: 'block',
              letterSpacing: '0.04em',
            }}
          >
            — {SITE_CONFIG.founder.fullName}, {SITE_CONFIG.founder.title}
          </cite>
        </div>
      </div>
    </section>
  );
}
