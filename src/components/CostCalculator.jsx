import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, ShieldCheck, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function CostCalculator({ onOpenConsultation }) {
  // State
  const [initialCapital, setInitialCapital] = useState(100000);
  const [years, setYears] = useState(20);
  const [bankFeePercent, setBankFeePercent] = useState(2.3);
  const [etfFeePercent, setEtfFeePercent] = useState(0.2);
  const [marketReturnPercent, setMarketReturnPercent] = useState(6.5);

  // Calculations
  const results = useMemo(() => {
    const grossReturn = marketReturnPercent / 100;
    const netBankRate = grossReturn - bankFeePercent / 100;
    const netEtfRate = grossReturn - etfFeePercent / 100;

    const bankFinal = Math.round(initialCapital * Math.pow(1 + netBankRate, years));
    const etfFinal = Math.round(initialCapital * Math.pow(1 + netEtfRate, years));
    const savedAmount = Math.max(0, etfFinal - bankFinal);
    const percentagePreserved = bankFinal > 0 ? Math.round((savedAmount / etfFinal) * 100) : 0;

    return {
      bankFinal,
      etfFinal,
      savedAmount,
      percentagePreserved,
    };
  }, [initialCapital, years, bankFeePercent, etfFeePercent, marketReturnPercent]);

  const formatEuro = (val) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="calcolatore"
      style={{
        padding: '6rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
            <Calculator size={14} />
            <span>Simulatore Quantitativo Indipendente</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--emerald-950)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Quanto ti Costa Davvero la Tua Banca?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 300 }}>
            Un costo apparentemente innocuo del 2% annuo, amplificato dall'interesse composto negativo,
            distrugge una fetta enorme del tuo capitale futuro. Calcola esattamente quanto puoi recuperare.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            }}
          >
            {/* Input Controls Column */}
            <div
              style={{
                padding: '2.5rem',
                backgroundColor: '#ffffff',
                borderRight: '1px solid var(--border-subtle)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--emerald-950)',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Sparkles size={18} color="#d4a737" />
                <span>Parametri di Simulazione</span>
              </h3>

              {/* Slider 1: Capitale Iniziale */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Capitale da Analizzare
                  </label>
                  <span
                    className="tabular-nums"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--emerald-850)',
                    }}
                  >
                    {formatEuro(initialCapital)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                  }}
                >
                  <span>€ 20.000</span>
                  <span>€ 500.000</span>
                  <span>€ 1.000.000+</span>
                </div>
              </div>

              {/* Slider 2: Orizzonte Temporale */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Orizzonte Temporale
                  </label>
                  <span
                    className="tabular-nums"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--emerald-850)',
                    }}
                  >
                    {years} Anni
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                  }}
                >
                  <span>5 Anni</span>
                  <span>20 Anni</span>
                  <span>35 Anni</span>
                </div>
              </div>

              {/* Slider 3: Costo Medio Banca */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Costi Annui Banca (TER + Gestioni)
                  </label>
                  <span
                    className="tabular-nums"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#dc2626',
                    }}
                  >
                    {bankFeePercent.toFixed(1)}% / anno
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="3.8"
                  step="0.1"
                  value={bankFeePercent}
                  onChange={(e) => setBankFeePercent(Number(e.target.value))}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                  Media italiana fondi comuni attivi: 2.1% - 2.8% (Fonte: Mediobanca R&S)
                </span>
              </div>

              {/* Additional Param: Expected Gross Return */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Rendimento Lordo di Mercato
                  </label>
                  <span
                    className="tabular-nums"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {marketReturnPercent.toFixed(1)}% / anno
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={marketReturnPercent}
                  onChange={(e) => setMarketReturnPercent(Number(e.target.value))}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                  Media storica diversificata azionaria/obbligazionaria
                </span>
              </div>

              {/* Note on ETF Cost */}
              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--emerald-50)',
                  border: '1px solid var(--emerald-100)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <ShieldCheck size={18} color="#1c6230" />
                <span style={{ fontSize: '0.8rem', color: 'var(--emerald-850)' }}>
                  Portafoglio Finanza101 basato su ETF: costo medio stimato di appena <strong>0.20%</strong> annuo.
                </span>
              </div>
            </div>

            {/* Results Presentation Column */}
            <div
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--emerald-950)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-40%',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212, 167, 55, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#edd28e',
                    fontWeight: 600,
                  }}
                >
                  Risultato della Diagnosi
                </span>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginTop: '0.35rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  Capitale Salvato dai Costi Occulti:
                </h3>

                {/* Big Highlight Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  <span className="gold-gradient-text-light">{formatEuro(results.savedAmount)}</span>
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: '2rem',
                    lineHeight: 1.5,
                  }}
                >
                  Con Finanza101 trattieni nel tuo patrimonio il{' '}
                  <strong style={{ color: '#edd28e' }}>{results.percentagePreserved}%</strong> in più di
                  ricchezza netta che altrimenti verrebbe dispersa in retrocessioni bancarie.
                </p>

                {/* Comparison Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  {/* Option A: Finanza101 */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.82rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span style={{ color: '#edd28e', fontWeight: 600 }}>
                        Portafoglio Indipendente (ETF 0.20%)
                      </span>
                      <span className="tabular-nums" style={{ color: '#ffffff', fontWeight: 700 }}>
                        {formatEuro(results.etfFinal)}
                      </span>
                    </div>
                    <div
                      style={{
                        height: '10px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: '100%',
                          background: 'linear-gradient(90deg, #1c6230 0%, #d4a737 100%)',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>
                  </div>

                  {/* Option B: Traditional Bank */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.82rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                        Banca Tradizionale ({bankFeePercent}% costi)
                      </span>
                      <span
                        className="tabular-nums"
                        style={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600 }}
                      >
                        {formatEuro(results.bankFinal)}
                      </span>
                    </div>
                    <div
                      style={{
                        height: '10px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${Math.round((results.bankFinal / results.etfFinal) * 100)}%`,
                          backgroundColor: '#94a3b8',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div>
                <button
                  onClick={onOpenConsultation}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                  }}
                >
                  <span>Richiedi Check-Up Gratuito del Tuo Portafoglio</span>
                  <ArrowRight size={18} />
                </button>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    marginTop: '0.75rem',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <AlertCircle size={13} color="#d4a737" />
                  <span>Nessun vincolo, 100% confidenziale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
