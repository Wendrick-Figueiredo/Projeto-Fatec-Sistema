// que não usa hooks ou estado

import React from 'react';
// O Next.js tem seu próprio sistema de internacionalização, então 'react-i18next'
// seria substituído por 'next-intl' ou similar se necessário

/**
 * Componente Footer - Rodapé da aplicação
 * 
 * Convertido de Class Component para Function Component
 * Mantém a mesma estrutura e estilos do original
 */
const Footer = () => {
  return (
    <footer className="footer">
      {/* Container principal com padding ajustado */}
      <div className="container ht-100p pd-t-0-f">
        {/* Layout flexível para diferentes tamanhos de tela */}
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
          
          {/* Texto do copyright (esquerda em telas maiores) */}
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © {' '}
            <a 
              href="https://www.bootstrapdash.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              bootstrapdash.com
            </a>{' '}
            2020
          </span>
          
          {/* Texto sobre templates (direita em telas maiores) */}
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Free{' '}
            <a 
              href="https://www.bootstrapdash.com/react-admin-templates/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              react admin
            </a>{' '} 
            templates from BootstrapDash.com.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;