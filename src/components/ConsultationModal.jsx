import React from 'react';
import { X } from 'lucide-react';
import IntakeForm from './IntakeForm';

export default function ConsultationModal({ isOpen, onClose, onOpenPrivacy }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(6, 25, 12, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            background: 'rgba(6, 25, 12, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.45rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Chiudi finestra"
        >
          <X size={20} />
        </button>

        <IntakeForm isModal={true} onOpenPrivacy={onOpenPrivacy} />
      </div>
    </div>
  );
}
