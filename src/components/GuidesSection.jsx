import React, { useState } from 'react';
import { BookOpen, FileSpreadsheet, ArrowUpRight, Search, CheckCircle, TrendingDown } from 'lucide-react';
import { ETF_COMPARISONS, SITE_CONFIG } from '../data/content';

export default function GuidesSection({ onOpenConsultation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredETFs = ETF_COMPARISONS.filter((item) => {
    return (
      item.assetClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.benchmark.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.etfAlternative.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section
      id="guide"
      style={{
        padding: '7rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
            <BookOpen size={14} />
            <span>Educazione & Trasparenza Finanziaria</span>
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
            Guida ai Costi Reali degli ETF (TER)
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6 }}>
            Gli ETF sono strumenti trasparenti, altamente liquidi e a basso costo. Ecco la radiografia
            comparativa tra i costi dei principali ETF globali e i corrispettivi fondi bancari distribuiti
            in Italia.
          </p>
        </div>

        {/* Featured Guide Overview Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: 'var(--emerald-50)',
                  border: '1px solid var(--emerald-100)',
                  color: 'var(--emerald-700)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                }}
              >
                Risorsa Esclusiva Finanza101
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  color: 'var(--emerald-950)',
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                Selezione Strategica di ETF a Basso TER
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Il <strong>TER (Total Expense Ratio)</strong> rappresenta il costo annuale di gestione dell'ETF
                espresso in percentuale del patrimonio. Abbiamo predisposto un foglio di calcolo professionale
                con l'elenco dei migliori strumenti suddivisi per emittente (iShares, Vanguard, Xtrackers, Amundi)
                e classe di attivo, per confrontare i titoli più adatti alla tua pianificazione.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={SITE_CONFIG.founder.spreadsheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald"
                  style={{ textDecoration: 'none' }}
                >
                  <FileSpreadsheet size={18} color="#edd28e" />
                  <span>Accedi al File Excel di Analisi</span>
                  <ArrowUpRight size={16} />
                </a>

                <button onClick={onOpenConsultation} className="btn-outline-emerald">
                  <span>Richiedi Portfolio Check-Up</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics of TER impact */}
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--emerald-950)', marginBottom: '1.25rem' }}>
                4 Costi Nascosti da Monitorare Sempre:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <span>1. TER di Gestione</span>
                    <span style={{ color: '#166534' }}>0.05% - 0.22% (ETF) vs 2.5% (Banca)</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Addebitato quotidianamente sul valore quota dello strumento.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <span>2. Commissioni di Transazione</span>
                    <span style={{ color: '#166534' }}>Spesso azzerate da broker moderni</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Le banche addebitano spesso minimi fissi elevati (fino a 15-25€ per operazione).
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <span>3. Spread Bid-Ask</span>
                    <span style={{ color: '#166534' }}>Minimo sugli ETF a grande liquidità</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    La differenza tra prezzo di acquisto e vendita, trascurabile sui volumi primari.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <span>4. Efficienza Fiscale</span>
                    <span style={{ color: '#166534' }}>ETF ad accumulazione senza drag fiscale</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    I dividendi vengono reinvestiti automaticamente al lordo dell'imposta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Table */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-serif)', color: 'var(--emerald-950)', fontWeight: 700 }}>
                Tabella Comparativa: Costo Banca vs. Costo ETF
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Dati aggiornati e calcolo del risparmio annuo su un capitale di € 100.000
              </p>
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '280px' }}>
              <Search
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Cerca classe di attivo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #cbd5e1',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>
          </div>

          {/* Table Container */}
          <div
            style={{
              overflowX: 'auto',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              backgroundColor: '#ffffff',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--emerald-950)', color: '#ffffff' }}>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Asset Class & Benchmark
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Fondo Tipico Banca
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fca5a5' }}>
                    TER Banca
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Alternativa ETF Indipendente
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#86efac' }}>
                    TER ETF
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#edd28e' }}>
                    Risparmio su 100k
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredETFs.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #f1f5f9',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : 'var(--bg-main)',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--emerald-50)')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : 'var(--bg-main)')
                    }
                  >
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      <div>{row.assetClass}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{row.benchmark}</div>
                    </td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {row.typicalBankFund}
                    </td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', fontWeight: 700, color: '#dc2626' }}>
                      {row.bankCost}
                    </td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {row.etfAlternative}
                    </td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', fontWeight: 700, color: '#166534' }}>
                      {row.etfCost}
                    </td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.95rem', fontWeight: 700, color: '#b45309' }}>
                      <span className="badge-pill-light" style={{ color: '#166534', background: '#dcfce7', borderColor: '#bbf7d0' }}>
                        {row.savingPer100kAnnual}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
