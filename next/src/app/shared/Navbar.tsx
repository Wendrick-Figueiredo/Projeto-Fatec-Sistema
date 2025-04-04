import { usePathname } from 'next/navigation'; // Substitui react-router-dom
import Link from 'next/link'; // Novo componente de link do Next.js
import Image from 'next/image'; // Componente otimizado de imagem
import { Dropdown } from 'react-bootstrap'; // Mantido (instale react-bootstrap)
import { useTranslations } from 'next-intl'; // Substitui react-i18next

/**
 * Componente Navbar - Barra de navegação superior
 * Convertido de Class Component para Function Component
 * Principais mudanças:
 * - Substituição de react-router por next/navigation
 * - Uso do componente Image otimizado
 * - Internacionalização com next-intl
 * - Conversão para hooks
 */
const Navbar = () => {
  const t = useTranslations('Navbar'); // Hook de internacionalização
  const pathname = usePathname(); // Hook para rota atual

  // Funções de toggle convertidas para hooks
  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas')?.classList.toggle('active');
  };

  const toggleRightSidebar = () => {
    document.querySelector('.right-sidebar')?.classList.toggle('open');
  };

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      {/* Logo e botão toggle (mobile) */}
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link href="/" className="navbar-brand brand-logo">
          <Image 
            src="/assets/images/logo.svg" 
            alt="logo"
            width={150}
            height={50}
          />
        </Link>
        <Link href="/" className="navbar-brand brand-logo-mini d-inline-block d-lg-none">
          <Image 
            src="/assets/images/logo-mini.svg" 
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <button 
          className="navbar-toggler navbar-toggler align-self-center" 
          type="button" 
          onClick={() => document.body.classList.toggle('sidebar-icon-only')}
        >
          <span className="icon-menu"></span>
        </button>
      </div>

      {/* Menu principal */}
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <h5 className="mb-0 font-weight-medium d-none d-xl-flex">
          {t('welcome_message')} {/* Texto internacionalizado */}
        </h5>

        <ul className="navbar-nav navbar-nav-right">
          {/* Campo de busca */}
          <form className="search-form d-none d-lg-block" onSubmit={evt => evt.preventDefault()}>
            <i className="icon-magnifier"></i>
            <input 
              type="search" 
              className="form-control" 
              placeholder={t('search_placeholder')} 
              title={t('search_title')}
            />
          </form>

          {/* Ícones de ação */}
          <li className="nav-item">
            <a href="#" onClick={evt => evt.preventDefault()} className="nav-link">
              <i className="icon-basket-loaded"></i>
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#" onClick={evt => evt.preventDefault()} className="nav-link">
              <i className="icon-chart"></i>
            </a>
          </li>

          {/* Dropdown de mensagens */}
          <li className="nav-item message-dropdown">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <i className="icon-speech"></i>
                <span className="count-number bg-danger">7</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="preview-list navbar-dropdown">
                <h6 className="p-3 mb-0">{t('messages')}</h6>
                <div className="dropdown-divider"></div>
                
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <Image 
                      src="/assets/images/faces/face4.jpg" 
                      alt="user" 
                      className="profile-pic"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      {t('messages.mark')}
                    </h6>
                    <p className="text-gray mb-0">
                      1 {t('time.minutes_ago')}
                    </p>
                  </div>
                </Dropdown.Item>
                
                {/* Itens de mensagem omitidos por brevidade */}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          {/* Dropdown de idiomas */}
          <li className="nav-item dropdown language-dropdown d-none d-md-flex align-items-center">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link d-flex align-items-center">
                <div className="d-inline-flex mr-2">
                  <i className="flag-icon flag-icon-us"></i>
                </div>
                <span className="profile-text font-weight-normal">
                  {t('language.english')}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="#" onClick={evt => evt.preventDefault()}>
                  <i className="flag-icon flag-icon-us mr-2"></i> {t('language.english')}
                </Dropdown.Item>
                {/* Outros idiomas omitidos */}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          {/* Perfil do usuário */}
          <li className="nav-item nav-profile d-none d-sm-flex">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link">
                <div className="nav-profile-img">
                  <Image 
                    src="/assets/images/faces/face8.jpg" 
                    alt="user"
                    width={40}
                    height={40}
                  />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{t('profile.name')}</p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                {/* Itens do menu de perfil omitidos */}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>

        <button 
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" 
          type="button" 
          onClick={toggleOffcanvas}
        >
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;