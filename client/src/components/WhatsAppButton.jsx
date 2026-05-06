import React from 'react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const phone = '919500078674'
  const message = encodeURIComponent('Hi! I am interested in interior design services from De Interio Café. Please share more details.')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
      id="whatsapp-float"
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2.4C8.5 2.4 2.4 8.5 2.4 16c0 2.4.6 4.7 1.8 6.7L2.4 29.6l7.1-1.8C11.4 28.9 13.7 29.5 16 29.5c7.5 0 13.6-6.1 13.6-13.6C29.6 8.5 23.5 2.4 16 2.4z" fill="currentColor"/>
        <path d="M22.5 19.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2-.1-1-.4-1.3-.3-.4-.6-.3-.8-.3h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.6 5.7 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" fill="white"/>
      </svg>
      <span className="whatsapp-btn__tooltip">Chat on WhatsApp</span>
    </a>
  )
}
