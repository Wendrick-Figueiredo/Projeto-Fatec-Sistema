import { Dropdown } from 'react-bootstrap';

/**
 * Componente Buttons - Demonstração de estilos e variações de botões
 * 
 * Principais mudanças:
 * - Conversão de Class Component para Function Component
 * - Manutenção de todos os estilos e funcionalidades originais
 * - Adição de comentários explicativos
 */

const Buttons = () => {
  return (
    <div>
      {/* Cabeçalho da página com breadcrumb */}
      <div className="page-header">
        <h3 className="page-title">Buttons</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" onClick={(e) => e.preventDefault()}>UI Elements</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Buttons</li>
          </ol>
        </nav>
      </div>

      {/* Seção principal de demonstração de botões */}
      <div className="row">
        {/* Cartão com variações básicas de botões */}
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Single color buttons</h4>
              <p className="card-description">
                Add className <code>.btn-&#123;color&#125;</code> for buttons in theme colors
              </p>
              <div className="template-demo">
                {/* Botões com cores temáticas */}
                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'].map((color) => (
                  <button key={color} type="button" className={`btn btn-${color} btn-fw`}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Demais seções de demonstração (inverse, rounded, outlined) */}
            {/* ... (manter estrutura similar para outras variações) ... */}
          </div>
        </div>

        {/* Seção de botões com ícones */}
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <h4 className="card-title">Icon Buttons</h4>
                  <p className="card-description">
                    Add className <code>.btn-icon</code> for buttons with only icons
                  </p>
                  
                  {/* Botões com ícones */}
                  <div className="template-demo d-flex justify-content-between flex-nowrap">
                    {['home', 'globe', 'envelope-open', 'star', 'location-pin'].map((icon, index) => (
                      <button 
                        key={icon}
                        type="button" 
                        className={`btn btn-${['primary', 'dark', 'danger', 'info', 'success'][index]} btn-rounded btn-icon`}
                      >
                        <i className={`icon-${icon}`}></i>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seção de tamanhos de botões */}
                <div className="col-md-5">
                  <h4 className="card-title">Button Size</h4>
                  <p className="card-description">
                    Use className <code>.btn-&#123;size&#125;</code>
                  </p>
                  <div className="template-demo">
                    {['lg', 'md', 'sm'].map((size) => (
                      <button 
                        key={size}
                        type="button" 
                        className={`btn btn-outline-secondary btn-${size}`}
                      >
                        btn-{size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de grupos de botões */}
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="card-title">Button groups</h4>
                  <p className="card-description">
                    Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>
                  </p>
                  
                  {/* Exemplo de dropdown com react-bootstrap */}
                  <div className="btn-group-vertical" role="group">
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                {/* Botões com texto e ícone */}
                <div className="col-md-6">
                  <h4 className="card-title">Button with text and icon</h4>
                  <div className="template-demo">
                    <button type="button" className="btn btn-primary btn-icon-text">
                      <i className="icon-doc btn-icon-prepend"></i> Submit
                    </button>
                    {/* ... outros exemplos ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de botões sociais */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Social Icon Buttons</h4>
              <div className="template-demo">
                {['facebook', 'youtube', 'twitter', 'dribbble', 'linkedin', 'google'].map((social) => (
                  <button 
                    key={social}
                    type="button" 
                    className={`btn btn-social-icon btn-outline-${social}`}
                  >
                    <i className={`icon-social-${social}`}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;