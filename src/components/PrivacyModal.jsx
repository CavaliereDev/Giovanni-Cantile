import React, { useState } from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function PrivacyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('privacy');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(6, 25, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-xl)',
          border: '1.5px solid rgba(212, 167, 55, 0.4)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: 'var(--emerald-950)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(212, 167, 55, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={22} color="#d4a737" />
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700 }}>
                Informativa Legale & Privacy
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#edd28e' }}>
                Conforme al Regolamento UE 2016/679 (GDPR)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: 'var(--bg-main)',
          }}
        >
          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              flex: 1,
              padding: '1rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'privacy' ? '2.5px solid #1c6230' : 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: activeTab === 'privacy' ? '#1c6230' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            Privacy Policy (GDPR)
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            style={{
              flex: 1,
              padding: '1rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'cookies' ? '2.5px solid #1c6230' : 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: activeTab === 'cookies' ? '#1c6230' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            Cookie Policy
          </button>
        </div>

        {/* Modal Content */}
        <div
          style={{
            padding: '2rem',
            overflowY: 'auto',
            fontSize: '0.92rem',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
          }}
        >
          {activeTab === 'privacy' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  1. Titolare del Trattamento
                </h4>
                <p>
                  Il Titolare del trattamento dei dati personali è il <strong>{SITE_CONFIG.founder.fullName}</strong>,
                  con sede operativa in {SITE_CONFIG.founder.address}, {SITE_CONFIG.founder.city}. P.IVA {SITE_CONFIG.founder.piva}.
                  Per qualsiasi chiarimento è possibile scrivere a{' '}
                  <a href={`mailto:${SITE_CONFIG.founder.email}`} style={{ color: '#1c6230', fontWeight: 600 }}>
                    {SITE_CONFIG.founder.email}
                  </a>.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  2. Dati Raccolti e Finalità
                </h4>
                <p>
                  Raccogliamo esclusivamente i dati forniti volontariamente tramite modulo di contatto (nome,
                  cognome, email, recapito telefonico, fascia di capitale e messaggio). Tali dati vengono trattati
                  unicamente per rispondere alla richiesta di diagnosi finanziaria e fissare il colloquio orientativo.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  3. Base Giuridica e Garanzie
                </h4>
                <p>
                  Il trattamento si fonda sul consenso espresso dell'interessato ai sensi dell'art. 6 lett. a del GDPR.
                  I dati non vengono ceduti, venduti o trasferiti a terze parti commerciali. L'inoltro dei moduli
                  è protetto da protocolli crittografici HTTPS.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  4. Diritti dell'Interessato
                </h4>
                <p>
                  Hai il diritto di accedere, rettificare, cancellare i tuoi dati ("diritto all'oblio"), richiederne
                  la limitazione o opporti al loro trattamento in qualsiasi momento inviando una comunicazione a{' '}
                  {SITE_CONFIG.founder.email}.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  1. Cosa sono i Cookie
                </h4>
                <p>
                  I cookie sono piccoli file di testo salvati sul tuo dispositivo durante la navigazione. Questo
                  sito utilizza esclusivamente cookie tecnici essenziali necessari a garantire la sicurezza della
                  connessione e la fruibilità delle sessioni.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  2. Cookie di Terze Parti
                </h4>
                <p>
                  Utilizziamo il servizio sicuro Formspree per la trasmissione cifrata delle richieste di contatto.
                  Non vengono impiegati cookie di profilazione o tracciamento invasivo a scopi pubblicitari.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--emerald-950)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  3. Gestione dei Cookie
                </h4>
                <p>
                  Puoi gestire o disabilitare i cookie in qualunque momento tramite le impostazioni del tuo browser
                  (Chrome, Safari, Firefox, Edge).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid #e2e8f0',
            backgroundColor: 'var(--bg-main)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button onClick={onClose} className="btn-emerald" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
            Chiudi Informativa
          </button>
        </div>
      </div>
    </div>
  );
}
