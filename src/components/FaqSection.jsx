import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FaqSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: '7rem 0',
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} />
            <span>Domande Frequenti</span>
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
            Tutto ciò che Devi Sapere
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 300 }}>
            Chiarezza e trasparenza fin dal primo istante. Ecco le risposte alle domande più frequenti
            sulla consulenza finanziaria indipendente e sul nostro metodo di diagnosi.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1.5px solid #d4a737' : '1px solid var(--border-subtle)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        borderRadius: '4px',
                        backgroundColor: isOpen ? 'var(--emerald-50)' : '#f1f5f9',
                        color: isOpen ? 'var(--emerald-850)' : 'var(--text-muted)',
                      }}
                    >
                      {faq.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: isOpen ? 'var(--emerald-950)' : 'var(--text-primary)',
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#d4a737' : '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#ffffff' : 'var(--text-secondary)',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.75rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1.25rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div
          style={{
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--emerald-950)', marginBottom: '0.5rem' }}>
            Hai una domanda specifica sul tuo caso personale?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Ogni situazione patrimoniale è unica. Parla direttamente con il Dott. Giovanni Cantile per una risposta chiara e confidenziale.
          </p>
          <button onClick={onOpenConsultation} className="btn-emerald">
            <MessageCircle size={18} color="#edd28e" />
            <span>Fai una Domanda al Dott. Giovanni</span>
          </button>
        </div>
      </div>
    </section>
  );
}
