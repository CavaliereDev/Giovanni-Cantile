import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function Navbar({ activeSection, onNavigate, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chi-sono', label: 'Chi Sono' },
    { id: 'social', label: 'Social & Community', badge: '10k+' },
    { id: 'protocollo', label: 'Protocollo Analisi' },
    { id: 'calcolatore', label: 'Simulatore Costi' },
    { id: 'guide', label: 'Guide ETF' },
    { id: 'contatti', label: 'Fai il Check-Up' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled
            ? 'rgba(6, 25, 12, 0.94)'
            : 'rgba(6, 25, 12, 0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(212, 167, 55, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.6)' : 'none',
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1c6230 0%, #0a2613 100%)',
                  border: '1.5px solid #d4a737',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(212, 167, 55, 0.25)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#d4a737',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    lineHeight: 1,
                  }}
                >
                  G
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#ffffff',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  Giovanni <span style={{ color: '#d4a737' }}>Cantile</span>
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                    fontWeight: 600,
                  }}
                >
                  Consulente Autonomo OCF · Finanza101
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1.5rem',
              }}
              className="desktop-nav"
            >
              <style>{`
                @media (min-width: 1060px) {
                  .desktop-nav { display: flex !important; }
                  .mobile-nav-toggle { display: none !important; }
                }
              `}</style>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    color: activeSection === item.id
                      ? '#d4a737'
                      : 'rgba(255, 255, 255, 0.82)',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    padding: '0.35rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === item.id ? '#d4a737' : 'rgba(255, 255, 255, 0.82)';
                  }}
                >
                  {item.label}
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.62rem',
                        padding: '1px 6px',
                        background: 'rgba(212, 167, 55, 0.25)',
                        border: '1px solid rgba(212, 167, 55, 0.5)',
                        color: '#f5d379',
                        borderRadius: '4px',
                        fontWeight: 700,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {activeSection === item.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        backgroundColor: '#d4a737',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1rem',
              }}
              className="desktop-nav"
            >
              <a
                href={SITE_CONFIG.founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <Instagram size={14} color="#d4a737" />
                <span style={{ fontWeight: 600 }}>Instagram</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{
                  padding: '0.65rem 1.35rem',
                  fontSize: '0.88rem',
                }}
              >
                <span>Fai il Check-Up</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-nav-toggle">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '0.55rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} color="#d4a737" /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'rgba(6, 25, 12, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6rem 2rem 2.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.8rem',
                background: 'rgba(212, 167, 55, 0.1)',
                border: '1px solid rgba(212, 167, 55, 0.25)',
                borderRadius: '6px',
                color: '#d4a737',
                fontSize: '0.78rem',
                fontWeight: 600,
                width: 'fit-content',
                marginBottom: '0.5rem',
              }}
            >
              <span>{SITE_CONFIG.founder.credentials}</span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  fontFamily: 'var(--font-serif)',
                  color: activeSection === item.id ? '#d4a737' : '#ffffff',
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-sans)',
                      padding: '2px 8px',
                      background: 'rgba(212, 167, 55, 0.2)',
                      color: '#d4a737',
                      borderRadius: '4px',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-gold"
              style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
            >
              <span>Fai il Check-Up Gratuito</span>
              <ArrowUpRight size={18} />
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#4ade80',
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                fontWeight: 600,
              }}
            >
              <span>Scrivimi su WhatsApp ({SITE_CONFIG.founder.phone})</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
