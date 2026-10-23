import React, { useState } from 'react';
import { Check, Send, AlertCircle, Instagram, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, INTAKE_STEPS } from '../data/content';

export default function IntakeForm({ isModal = false, onOpenPrivacy }) {
  const [answers, setAnswers] = useState({
    obiettivo: null,
    orizzonte: null,
    capitale: null,
    situazione: null,
  });

  const [subFeeAccepted, setSubFeeAccepted] = useState(false);
  const [feeDeclined, setFeeDeclined] = useState(false);

  const [personal, setPersonal] = useState({
    nome: '',
    telefono: '',
    eta: '',
    email: '',
    note: '',
    fonte: null,
    fonteAltro: '',
  });

  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const LOW_BAND = "Meno di 50.000 €";

  const handleChipClick = (key, value) => {
    setErrorMessage(null);
    setAnswers((prev) => {
      const next = { ...prev, [key]: value };
      return next;
    });

    if (key === 'capitale') {
      if (value === LOW_BAND) {
        setSubFeeAccepted(false);
        setFeeDeclined(false);
      } else {
        setSubFeeAccepted(false);
        setFeeDeclined(false);
      }
    }
  };

  const isStep1Done = () => {
    if (!answers.capitale) return false;
    if (answers.capitale === LOW_BAND) return subFeeAccepted === true;
    return true;
  };

  const isComplete = () => {
    return (
      answers.obiettivo &&
      answers.orizzonte &&
      isStep1Done() &&
      answers.situazione &&
      privacyChecked
    );
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    if (!isComplete()) {
      setErrorMessage("Completa i 4 punti del percorso e accetta l'informativa privacy per continuare.");
      return;
    }
    if (!personal.nome.trim()) {
      setErrorMessage("Inserisci il tuo nome e cognome.");
      return;
    }
    if (!personal.telefono.trim()) {
      setErrorMessage("Inserisci un recapito telefonico per essere ricontattato.");
      return;
    }
    if (!personal.eta.trim()) {
      setErrorMessage("Inserisci la tua età per aiutarmi a inquadrare la tua fase di vita.");
      return;
    }

    setIsSubmitting(true);

    let capitaleLine = answers.capitale;
    if (answers.capitale === LOW_BAND) {
      capitaleLine += ` (parcella da almeno 400€ confermata)`;
    }

    let fonteFinal = personal.fonte || "—";
    if (personal.fonte === 'Altro' && personal.fonteAltro.trim()) {
      fonteFinal = `Altro: ${personal.fonteAltro.trim()}`;
    }

    const payload = {
      Nome: personal.nome.trim(),
      Telefono: personal.telefono.trim(),
      Eta: personal.eta.trim(),
      Email: personal.email.trim() || "—",
      Capitale: capitaleLine,
      Obiettivo: answers.obiettivo,
      Orizzonte: answers.orizzonte,
      Situazione: answers.situazione,
      Fonte: fonteFinal,
      Note: personal.note.trim() || "—",
    };

    // 1) Open WhatsApp immediately in new tab with pre-filled message
    let msg = `Ciao Giovanni, ho compilato il form dal tuo profilo.\n\n`;
    msg += `• Capitale: ${capitaleLine}\n`;
    msg += `• Obiettivo: ${answers.obiettivo}\n`;
    msg += `• Orizzonte: ${answers.orizzonte}\n`;
    msg += `• Situazione attuale: ${answers.situazione}\n`;
    msg += `• Nome: ${personal.nome.trim()}\n`;
    msg += `• Età: ${personal.eta.trim()}\n`;
    msg += `• Telefono: ${personal.telefono.trim()}\n`;
    if (personal.email.trim()) msg += `• Email: ${personal.email.trim()}\n`;
    if (personal.fonte) msg += `• Come mi ha conosciuto: ${fonteFinal}\n`;
    if (personal.note.trim()) msg += `• Note: ${personal.note.trim()}\n`;
    msg += `\nVorrei prenotare una call conoscitiva.`;

    const waUrl = `https://wa.me/${SITE_CONFIG.founder.phoneDigits}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    // 2) Send lead to Formspree endpoint in parallel
    try {
      await fetch(SITE_CONFIG.founder.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // lead already preserved in WhatsApp
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        padding: isModal ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--text-primary)',
        boxShadow: 'var(--shadow-xl)',
        border: '1.5px solid rgba(212, 167, 55, 0.35)',
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--emerald-700)',
            marginBottom: '0.4rem',
          }}
        >
          Check-up Finanziario Personale
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 700,
            color: 'var(--emerald-950)',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}
        >
          Quattro domande, poi ci parliamo
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          Lavoro solo a parcella, senza prodotti da piazzare né banche da compiacere. Due minuti per inquadrare
          la tua situazione patrimoniale.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            backgroundColor: 'var(--emerald-50)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--emerald-100)',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--emerald-850)',
              color: '#edd28e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <Check size={32} />
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--emerald-950)',
              marginBottom: '0.75rem',
            }}
          >
            Ricevuto con successo!
          </h4>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              maxWidth: '460px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            Le tue risposte sono arrivate direttamente a <strong>Giovanni Cantile</strong>. Ti ricontatterà a breve — se desideri anticipare, ti abbiamo aperto WhatsApp per scrivergli direttamente.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.founder.phoneDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald"
            style={{ textDecoration: 'none' }}
          >
            <MessageSquare size={18} color="#edd28e" />
            <span>Apri Chat WhatsApp (+39 351 4229939)</span>
          </a>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Steps Timeline Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Step 1: Obiettivo */}
            <div style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: answers.obiettivo ? 'var(--emerald-850)' : 'var(--bg-main)',
                  border: answers.obiettivo ? '2px solid var(--emerald-850)' : '2px solid #cbd5e1',
                  color: answers.obiettivo ? '#edd28e' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                1
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.85rem' }}>
                  Qual è l'obiettivo principale?
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {INTAKE_STEPS.obiettivo.map((item) => {
                    const isSelected = answers.obiettivo === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleChipClick('obiettivo', item)}
                        style={{
                          padding: '0.65rem 1.15rem',
                          borderRadius: '10px',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          border: isSelected ? '1.5px solid var(--emerald-850)' : '1.5px solid #e2e8f0',
                          backgroundColor: isSelected ? 'var(--emerald-850)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--text-primary)',
                          boxShadow: isSelected ? '0 4px 12px rgba(10, 38, 19, 0.15)' : 'none',
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Orizzonte */}
            <div style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: answers.orizzonte ? 'var(--emerald-850)' : 'var(--bg-main)',
                  border: answers.orizzonte ? '2px solid var(--emerald-850)' : '2px solid #cbd5e1',
                  color: answers.orizzonte ? '#edd28e' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                2
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.85rem' }}>
                  Tra quanto pensi ti serviranno?
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {INTAKE_STEPS.orizzonte.map((item) => {
                    const isSelected = answers.orizzonte === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleChipClick('orizzonte', item)}
                        style={{
                          padding: '0.65rem 1.15rem',
                          borderRadius: '10px',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          border: isSelected ? '1.5px solid var(--emerald-850)' : '1.5px solid #e2e8f0',
                          backgroundColor: isSelected ? 'var(--emerald-850)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--text-primary)',
                          boxShadow: isSelected ? '0 4px 12px rgba(10, 38, 19, 0.15)' : 'none',
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Capitale */}
            <div style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isStep1Done() ? 'var(--emerald-850)' : 'var(--bg-main)',
                  border: isStep1Done() ? '2px solid var(--emerald-850)' : '2px solid #cbd5e1',
                  color: isStep1Done() ? '#edd28e' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                3
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.85rem' }}>
                  Capitale indicativo
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {INTAKE_STEPS.capitale.map((item) => {
                    const isSelected = answers.capitale === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleChipClick('capitale', item)}
                        style={{
                          padding: '0.65rem 1.15rem',
                          borderRadius: '10px',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          border: isSelected ? '1.5px solid var(--emerald-850)' : '1.5px solid #e2e8f0',
                          backgroundColor: isSelected ? 'var(--emerald-850)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--text-primary)',
                          boxShadow: isSelected ? '0 4px 12px rgba(10, 38, 19, 0.15)' : 'none',
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                {/* Sub-question for < 50k */}
                {answers.capitale === LOW_BAND && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--emerald-50)',
                      borderLeft: '4px solid #d4a737',
                      borderTop: '1px solid var(--emerald-100)',
                      borderRight: '1px solid var(--emerald-100)',
                      borderBottom: '1px solid var(--emerald-100)',
                    }}
                  >
                    {!subFeeAccepted && !feeDeclined && (
                      <>
                        <p style={{ fontSize: '0.92rem', color: 'var(--emerald-950)', lineHeight: 1.5, marginBottom: '1rem' }}>
                          Per patrimoni sotto i 50.000 € lavoro a parcella di almeno <strong>400 €</strong>,
                          indipendentemente dal capitale — vale anche per l'impostazione di un PAC. Se il numero ha senso per te, andiamo avanti.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <button
                            type="button"
                            onClick={() => {
                              setSubFeeAccepted(true);
                              setFeeDeclined(false);
                            }}
                            className="btn-emerald"
                            style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                          >
                            Ha senso, continua
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSubFeeAccepted(false);
                              setFeeDeclined(true);
                              setAnswers((prev) => ({ ...prev, capitale: null }));
                            }}
                            className="btn-outline-emerald"
                            style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                          >
                            Non fa per me
                          </button>
                        </div>
                      </>
                    )}

                    {subFeeAccepted && (
                      <p style={{ fontSize: '0.92rem', color: '#166534', fontWeight: 600, margin: 0 }}>
                        ✓ Parcella da almeno <strong>400 €</strong> confermata — andiamo avanti.
                      </p>
                    )}

                    {feeDeclined && (
                      <div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          Nessun problema. Trovi comunque tutta l'educazione finanziaria gratuita sui miei canali social.
                        </p>
                        <a
                          href={SITE_CONFIG.founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            color: 'var(--emerald-850)',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                            textDecoration: 'none',
                          }}
                        >
                          <Instagram size={16} />
                          <span>Seguimi su Instagram →</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Situazione attuale */}
            <div style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: answers.situazione ? 'var(--emerald-850)' : 'var(--bg-main)',
                  border: answers.situazione ? '2px solid var(--emerald-850)' : '2px solid #cbd5e1',
                  color: answers.situazione ? '#edd28e' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                4
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.85rem' }}>
                  Come sono gestiti oggi?
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {INTAKE_STEPS.situazione.map((item) => {
                    const isSelected = answers.situazione === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleChipClick('situazione', item)}
                        style={{
                          padding: '0.65rem 1.15rem',
                          borderRadius: '10px',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          border: isSelected ? '1.5px solid var(--emerald-850)' : '1.5px solid #e2e8f0',
                          backgroundColor: isSelected ? 'var(--emerald-850)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--text-primary)',
                          boxShadow: isSelected ? '0 4px 12px rgba(10, 38, 19, 0.15)' : 'none',
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', height: '1px', backgroundColor: '#e2e8f0', margin: '0.5rem 0' }} />

          {/* Contact Details Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                Come ti chiami? *
              </label>
              <input
                type="text"
                placeholder="Nome e cognome"
                value={personal.nome}
                onChange={(e) => setPersonal({ ...personal, nome: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  border: '1.5px solid #e2e8f0',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                  Il tuo numero (WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="es. 351 422 9939"
                  value={personal.telefono}
                  onChange={(e) => setPersonal({ ...personal, telefono: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.95rem',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                  Quanti anni hai? *
                </label>
                <input
                  type="number"
                  placeholder="es. 34"
                  min="18"
                  max="100"
                  value={personal.eta}
                  onChange={(e) => setPersonal({ ...personal, eta: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.95rem',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                Email <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>— facoltativa</span>
              </label>
              <input
                type="email"
                placeholder="nome@email.com"
                value={personal.email}
                onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  border: '1.5px solid #e2e8f0',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                Due righe sulla tua situazione <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>— facoltativo</span>
              </label>
              <textarea
                rows={3}
                placeholder="Es. ho un fondo comune in banca fermo da anni, non so se ha senso tenerlo o come investire la liquidità..."
                value={personal.note}
                onChange={(e) => setPersonal({ ...personal, note: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  border: '1.5px solid #e2e8f0',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Da dove mi hai conosciuto? */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--emerald-950)', marginBottom: '0.4rem' }}>
                Da dove mi hai conosciuto? <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>— facoltativo</span>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {INTAKE_STEPS.fonte.map((f) => {
                  const isSel = personal.fonte === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setPersonal({ ...personal, fonte: f })}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        border: isSel ? '1.5px solid var(--emerald-850)' : '1.5px solid #e2e8f0',
                        backgroundColor: isSel ? 'var(--emerald-850)' : '#ffffff',
                        color: isSel ? '#ffffff' : 'var(--text-primary)',
                      }}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              {personal.fonte === 'Altro' && (
                <div style={{ marginTop: '0.6rem' }}>
                  <input
                    type="text"
                    placeholder="Dove, esattamente?"
                    value={personal.fonteAltro}
                    onChange={(e) => setPersonal({ ...personal, fonteAltro: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.95rem',
                      fontSize: '0.9rem',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      outline: 'none',
                    }}
                  />
                </div>
              )}
            </div>

            {/* Privacy Checkbox */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
              <input
                type="checkbox"
                id="intake-privacy"
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#1c6230', marginTop: '3px', cursor: 'pointer' }}
              />
              <label htmlFor="intake-privacy" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: 1.5 }}>
                Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali per ricevere una risposta e concordare la prima call conoscitiva.
              </label>
            </div>

            {errorMessage && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              disabled={!isComplete() || isSubmitting}
              onClick={handleSubmit}
              className="btn-gold"
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '1.05rem',
                opacity: !isComplete() || isSubmitting ? 0.6 : 1,
                cursor: !isComplete() || isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              <MessageSquare size={18} />
              <span>
                {isSubmitting
                  ? "Invio in corso..."
                  : isComplete()
                  ? "Invia e scrivimi su WhatsApp"
                  : "Compila i 4 punti per continuare"}
              </span>
            </button>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              I tuoi dati restano tra noi. La prima call è gratuita e serve solo a capire se ha senso lavorare insieme.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
