import React, { useState } from 'react';
import { Activity, TrendingUp, ShieldCheck, Award, CheckCircle, XCircle, ArrowRight, FileSpreadsheet } from 'lucide-react';
import { PILLARS } from '../data/content';

export default function ProtocolSection({ onOpenConsultation }) {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={24} color="#d4a737" />;
      case 'TrendingUp':
        return <TrendingUp size={24} color="#d4a737" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} color="#d4a737" />;
      case 'Award':
        return <Award size={24} color="#d4a737" />;
      default:
        return <Activity size={24} color="#d4a737" />;
    }
  };

  return (
    <section
      id="protocollo"
      style={{
        padding: '7rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
            <span>Metodologia Scientifica & Indipendente</span>
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
            Il Protocollo di Analisi Integrata
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6 }}>
            Non offriamo servizi frammentati né scorciatoie speculative. Abbiamo codificato la nostra
            competenza in un percorso strutturato in 4 fasi per massimizzare la sicurezza e il rendimento
            netto del tuo capitale.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--emerald-950)' : 'var(--bg-main)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected
                    ? '1.5px solid #d4a737'
                    : '1px solid var(--border-subtle)',
                  boxShadow: isSelected ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: isSelected ? 'rgba(212, 167, 55, 0.15)' : 'var(--emerald-50)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: isSelected ? '1px solid rgba(212, 167, 55, 0.3)' : '1px solid var(--emerald-100)',
                    }}
                  >
                    {getIcon(pillar.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: isSelected ? '#edd28e' : 'var(--emerald-700)',
                      opacity: 0.8,
                    }}
                  >
                    {pillar.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                    color: isSelected ? '#ffffff' : 'var(--emerald-950)',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {pillar.shortDesc}
                </p>

                <div
                  style={{
                    paddingTop: '0.85rem',
                    borderTop: isSelected ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: isSelected ? '#edd28e' : 'var(--emerald-700)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>{pillar.keyBenefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep-Dive Banner */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--emerald-50)',
            border: '1px solid var(--emerald-100)',
            marginBottom: '5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--emerald-850)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {getIcon(PILLARS[selectedPillar].icon)}
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--emerald-700)', textTransform: 'uppercase' }}>
                Fase {PILLARS[selectedPillar].number} di 04
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--emerald-950)', marginBottom: '0.5rem' }}>
                {PILLARS[selectedPillar].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {PILLARS[selectedPillar].fullDesc}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--emerald-850)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#1c6230" />
                <span>Risultato Garantito: {PILLARS[selectedPillar].keyBenefit}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Comparison: Prima vs Dopo */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--emerald-700)', fontWeight: 600 }}>
              Il Risultato del Check-Up
            </span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--emerald-950)', fontWeight: 700, marginTop: '0.35rem' }}>
              Banca Tradizionale vs. Finanza101
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Card 1: Portafoglio Bancario Tipico */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid #fee2e2',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#dc2626',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                <XCircle size={14} />
                <span>Gestione Bancaria Tipica</span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>
                Fondi Comuni Attivi & Polizze
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                  <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Costi elevati:</strong> TER medio del 2.3% - 2.8% annuo + commissioni di ingresso e performance.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                  <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Conflitto d'interessi:</strong> Il venditore riceve retrocessioni sui prodotti con margini più alti.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                  <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Falsa diversificazione:</strong> Numerosi fondi con nomi diversi che replicano gli stessi titoli azionari.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                  <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Sottoperformance cronica:</strong> L'85% dei fondi non batte il benchmark di mercato su 10 anni.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Portafoglio Finanza101 */}
            <div
              style={{
                backgroundColor: 'var(--emerald-950)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1.5px solid #d4a737',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(212, 167, 55, 0.2)',
                  border: '1px solid rgba(212, 167, 55, 0.4)',
                  color: '#edd28e',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                <CheckCircle size={14} color="#edd28e" />
                <span>Protocollo Finanza101</span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                Portafoglio Indipendente in ETF
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <CheckCircle size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Costi ridotti al minimo:</strong> TER medio di appena 0.15% - 0.25% annuo. Zero commissioni d'ingresso.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <CheckCircle size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Zero conflitti:</strong> Consulenza pura 'Fee-Only', remunerata a parcella unicamente dal cliente.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <CheckCircle size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Diversificazione globale reale:</strong> Esposizione a migliaia di aziende solide e obbligazioni di massima qualità.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <CheckCircle size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Trasparenza totale:</strong> Sai esattamente quanto rende ogni strumento e quanto paghi ogni singolo giorno.</span>
                </li>
              </ul>

              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <span>Richiedi Check-Up del Tuo Portafoglio</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
