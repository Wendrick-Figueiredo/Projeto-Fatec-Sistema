import { Dropdown, ButtonGroup } from 'react-bootstrap';

/**
 * Componente Dropdowns - Demonstração de variações de dropdowns
 * 
 * Principais mudanças:
 * - Conversão de Class Component para Function Component
 * - Manutenção de todos os estilos e funcionalidades originais
 * - Adição de comentários explicativos
 * - Organização do código em seções lógicas
 */

const Dropdowns = () => {
  // Dados reutilizáveis para os dropdowns
  const dropdownItems = [
    { header: "Settings" },
    { text: "Action" },
    { text: "Another action" },
    { text: "Something else here" },
    { divider: true },
    { text: "Separated link" }
  ];

  const buttonVariants = [
    { color: "primary", id: "dropdownMenuButton1" },
    { color: "secondary", id: "dropdownMenuButton2" },
    { color: "danger", id: "dropdownMenuButton3" },
    { color: "warning", id: "dropdownMenuButton4" },
    { color: "success", id: "dropdownMenuButton5" },
    { color: "info", id: "dropdownMenuButton6" }
  ];

  return (
    <div>
      {/* Cabeçalho da página com breadcrumb */}
      <div className="page-header">
        <h3 className="page-title">Dropdowns</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" onClick={(e) => e.preventDefault()}>UI Elements</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Dropdowns</li>
          </ol>
        </nav>
      </div>

      {/* Seção principal de demonstração de dropdowns */}
      <div className="row">
        {/* Dropdowns básicos */}
        <div className="col-lg-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic dropdown</h4>
              <p className="card-description">
                Wrap the dropdown's toggle (your button or link) and the dropdown menu within <code>.dropdown</code>
              </p>
              <div className="template-demo">
                {buttonVariants.map((variant) => (
                  <Dropdown key={variant.id}>
                    <Dropdown.Toggle variant={`btn btn-${variant.color}`} id={variant.id}>
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownItems.map((item, index) => (
                        item.header ? <Dropdown.Header key={`header-${index}`}>{item.header}</Dropdown.Header> :
                        item.divider ? <Dropdown.Divider key={`divider-${index}`} /> :
                        <Dropdown.Item key={`item-${index}`}>{item.text}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </div>

            {/* Dropdowns com outline */}
            <div className="card-body">
              <h4 className="card-title">Dropdown outline</h4>
              <p className="card-description">
                Add class <code>.btn-outline-&#123;color&#125;</code> to the button inside <code>.dropdown</code>
              </p>
              <div className="template-demo">
                {buttonVariants.map((variant) => (
                  <Dropdown key={`outline-${variant.id}`}>
                    <Dropdown.Toggle variant={`btn btn-outline-${variant.color}`} id={`outline-${variant.id}`}>
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownItems.map((item, index) => (
                        item.header ? <Dropdown.Header key={`outline-header-${index}`}>{item.header}</Dropdown.Header> :
                        item.divider ? <Dropdown.Divider key={`outline-divider-${index}`} /> :
                        <Dropdown.Item key={`outline-item-${index}`}>{item.text}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdowns split */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Split button dropdowns</h4>
              <p className="card-description">
                Wrap two buttons in <code>.btn-group</code> and add <code>.dropdown-toggle-split</code> to the toggling button
              </p>
              <div className="template-demo">
                {buttonVariants.map((variant) => (
                  <Dropdown as={ButtonGroup} key={`split-${variant.id}`}>
                    <button type="button" className={`btn btn-${variant.color}`}>Dropdown</button>
                    <Dropdown.Toggle 
                      variant={`btn btn-${variant.color} dropdown-toggle dropdown-toggle-split`} 
                      id={`dropdownMenuSplitButton${variant.id.slice(-1)}`}
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownItems.map((item, index) => (
                        item.header ? <Dropdown.Header key={`split-header-${index}`}>{item.header}</Dropdown.Header> :
                        item.divider ? <Dropdown.Divider key={`split-divider-${index}`} /> :
                        <Dropdown.Item key={`split-item-${index}`}>{item.text}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdowns com ícones */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Icon dropdowns</h4>
              <p className="card-description">Add icon tags instead of text</p>
              <div className="row">
                <div className="col-12">
                  <div className="template-demo d-flex flex-wrap justify-content-between">
                    {[
                      { icon: "globe", color: "warning", id: "dropdownMenuIconButton1" },
                      { icon: "trophy", color: "danger", id: "dropdownMenuIconButton2" },
                      { icon: "clock", color: "outline-info", id: "dropdownMenuIconButton3" },
                      { icon: "heart", color: "success", id: "dropdownMenuIconButton4" },
                      { icon: "logout", color: "warning", id: "dropdownMenuIconButton5" },
                      { icon: "shield", color: "primary", id: "dropdownMenuIconButton6" },
                      { icon: "user", color: "dark", id: "dropdownMenuIconButton7" },
                      { icon: "bell", color: "info", id: "dropdownMenuIconButton8" }
                    ].map((iconBtn) => (
                      <Dropdown key={iconBtn.id}>
                        <Dropdown.Toggle 
                          variant={`btn btn-${iconBtn.color}`} 
                          id={iconBtn.id}
                        >
                          <i className={`icon-${iconBtn.icon}`}></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {dropdownItems.map((item, index) => (
                            item.header ? <Dropdown.Header key={`icon-header-${index}`}>{item.header}</Dropdown.Header> :
                            item.divider ? <Dropdown.Divider key={`icon-divider-${index}`} /> :
                            <Dropdown.Item key={`icon-item-${index}`}>{item.text}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropup variation */}
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dropup variation</h4>
              <p className="card-description">Add class <code>.dropup</code></p>
              <div className="template-demo">
                {buttonVariants.map((variant) => (
                  <Dropdown drop="up" as={ButtonGroup} key={`dropup-${variant.id}`}>
                    <button type="button" className={`btn btn-${variant.color}`}>Dropdown</button>
                    <Dropdown.Toggle 
                      variant={`btn btn-${variant.color}`} 
                      id={`dropupMenuSplitButton${variant.id.slice(-1)}`}
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownItems.map((item, index) => (
                        item.header ? <Dropdown.Header key={`dropup-header-${index}`}>{item.header}</Dropdown.Header> :
                        item.divider ? <Dropdown.Divider key={`dropup-divider-${index}`} /> :
                        <Dropdown.Item key={`dropup-item-${index}`}>{item.text}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown sizes */}
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dropdown sizes</h4>
              <p className="card-description">
                Add class <code>.btn-&#123;size&#125;</code> to dropdown buttons
              </p>
              <div className="template-demo mt-5">
                {['lg', '', 'sm'].map((size) => (
                  <Dropdown key={`size-${size || 'md'}`}>
                    <Dropdown.Toggle 
                      variant={`btn btn-danger${size ? ` btn-${size}` : ''}`} 
                      id={`dropdownMenuSizeButton${size ? size === 'lg' ? '1' : '3' : '2'}`}
                    >
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownItems.map((item, index) => (
                        item.header ? <Dropdown.Header key={`size-header-${index}`}>{item.header}</Dropdown.Header> :
                        item.divider ? <Dropdown.Divider key={`size-divider-${index}`} /> :
                        <Dropdown.Item key={`size-item-${index}`}>{item.text}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;