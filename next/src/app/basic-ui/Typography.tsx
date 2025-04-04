/**
 * Componente Typography - Demonstração de elementos tipográficos
 * 
 * Principais mudanças:
 * - Conversão de Class Component para Function Component
 * - Manutenção de todos os estilos e funcionalidades originais
 * - Adição de comentários explicativos
 * - Organização do código em seções lógicas
 */

const Typography = () => {
  return (
    <div>
      {/* Cabeçalho da página com breadcrumb */}
      <div className="page-header">
        <h3 className="page-title">Typography</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" onClick={(e) => e.preventDefault()}>UI Elements</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Typography</li>
          </ol>
        </nav>
      </div>

      {/* Seção principal de demonstração tipográfica */}
      <div className="row">
        {/* Cabeçalhos básicos */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings</h4>
              <p className="card-description">
                Add tags <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or class <code>.h1</code> to <code>.h6</code>
              </p>
              <div className="template-demo">
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <div key={`h${level}`}>
                    {React.createElement(`h${level}`, {}, `h${level}. Heading`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cabeçalhos com texto secundário */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings with secondary text</h4>
              <p className="card-description">Add faded secondary text to headings</p>
              <div className="template-demo">
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <div key={`h${level}-secondary`}>
                    {React.createElement(
                      `h${level}`, 
                      {}, 
                      `h${level}. Heading `,
                      <small key={`small-${level}`} className="text-muted">Secondary text</small>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Display headings */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Display headings</h4>
              <p className="card-description">
                Add class <code>.display1</code> to <code>.display-4</code>
              </p>
              <div className="template-demo">
                {[1, 2, 3, 4].map((display) => (
                  <h1 key={`display-${display}`} className={`display-${display}`}>
                    Display {display}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Parágrafo e tamanhos de ícone */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Paragraph</h4>
                  <p className="card-description">Write text in <code>&lt;p&gt;</code> tag</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Icon size</h4>
                  <p className="card-description">
                    Add class <code>.icon-lg</code>, <code>.icon-md</code>, <code>.icon-sm</code>
                  </p>
                  <div className="row">
                    {['lg', 'md', 'sm'].map((size) => (
                      <div key={`icon-${size}`} className="col-md-4 d-flex align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <i className={`icon-compas icon-${size} ${
                            size === 'lg' ? 'text-warning' : 
                            size === 'md' ? 'text-success' : 'text-danger'
                          }`}></i>
                          <p className="mb-0 ml-1">Icon-{size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blocos de citação */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Blockquotes</h4>
              <p className="card-description">
                Wrap content inside <code>&lt;blockquote className="blockquote"&gt;</code>
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Integer posuere erat a ante.
                </p>
              </blockquote>
            </div>
            <div className="card-body">
              <blockquote className="blockquote blockquote-primary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Endereço e texto destacado */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Address</h4>
              <p className="card-description">Use <code>&lt;address&gt;</code> tag</p>
              <div className="row">
                <div className="col-md-6">
                  <address>
                    <p className="font-weight-semibold">Stellar imc</p>
                    <p>695 lsom Ave,</p>
                    <p>Suite 00</p>
                    <p>San Francisco, CA 94107</p>
                  </address>
                </div>
                <div className="col-md-6">
                  <address className="text-primary">
                    <p className="font-weight-semibold">E-mail</p>
                    <p className="mb-2">johndoe@examplemeail.com</p>
                    <p className="font-weight-semibold">Web Address</p>
                    <p>www.stellar-admin.com</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Lead</h4>
              <p className="card-description">Use class <code>.lead</code></p>
              <p className="lead">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
            </div>
          </div>
        </div>

        {/* Cores de texto */}
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Text colors</h4>
              <p className="card-description">
                Use class <code>.text-primary</code>, <code>.text-secondary</code> etc. for text in theme colors
              </p>
              <div className="row">
                <div className="col-md-6">
                  {['primary', 'success', 'danger', 'warning', 'info'].map((color) => (
                    <p key={color} className={`text-${color}`}>.text-{color}</p>
                  ))}
                </div>
                <div className="col-md-6">
                  {['light', 'secondary', 'dark', 'muted', 'white'].map((color) => (
                    <p 
                      key={color} 
                      className={`text-${color} ${color === 'light' || color === 'white' ? 'bg-dark pl-1' : ''}`}
                    >
                      .text-{color}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alinhamento de mídia */}
        {['start', 'center', 'end'].map((align) => (
          <div key={`media-${align}`} className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{`${align.charAt(0).toUpperCase() + align.slice(1)} aligned media`}</h4>
                <div className="media">
                  <i className={`icon-globe icon-md text-info d-flex align-self-${align} mr-3`}></i>
                  <div className="media-body">
                    <p className="card-text">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Texto destacado e lista não ordenada */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Highlighted Text</h4>
              <p className="card-description">
                Wrap the text in <code>&lt;mark&gt;</code> to highlight text
              </p>
              <p>
                It is a long <mark className="bg-warning text-white">established</mark> fact that a reader will be distracted.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List Unordered</h4>
              <ul>
                {[
                  'Lorem ipsum dolor sit amet',
                  'Consectetur adipiscing elit',
                  'Integer molestie lorem at massa',
                  'Facilisis in pretium nisl aliquet',
                  'Nulla volutpat aliquam velit'
                ].map((item, index) => (
                  <li key={`ul-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Texto em negrito e lista ordenada */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bold text</h4>
              <p className="card-description">Use class <code>.font-weight-semibold</code></p>
              <p>
                It is a long <span className="font-weight-semibold">established fact</span> that a reader will be distracted.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List Ordered</h4>
              <ol>
                {[
                  'Lorem ipsum dolor sit amet',
                  'Consectetur adipiscing elit',
                  'Integer molestie lorem at massa',
                  'Facilisis in pretium nisl aliquet',
                  'Nulla volutpat aliquam velit'
                ].map((item, index) => (
                  <li key={`ol-${index}`}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Transformações de texto */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-primary">Underline</h4>
              <p className="card-description">Wrap in <code>&lt;u&gt;</code> tag for underline</p>
              <p>
                <u>lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.</u>
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-danger">Lowercase</h4>
              <p className="card-description">Use class <code>.text-lowercase</code></p>
              <p className="text-lowercase">
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-warning">Uppercase</h4>
              <p className="card-description">Use class <code>.text-uppercase</code></p>
              <p className="text-uppercase">
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Mais transformações de texto */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Mute</h4>
              <p className="card-description">Use class <code>.text-muted</code></p>
              <p className="text-muted">
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-success">Strike</h4>
              <p className="card-description">Wrap content in <code>&lt;del&gt;</code> tag</p>
              <p>
                <del>lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.</del>
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-info">Capitalized</h4>
              <p className="card-description">Use class <code>.text-capitalize</code></p>
              <p className="text-capitalize">
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Listas com ícones */}
        {['ticked', 'arrow', 'star'].map((iconType) => (
          <div key={`list-${iconType}`} className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">List with icon</h4>
                <p className="card-description">
                  Add class <code>.list-{iconType}</code> to <code>&lt;ul&gt;</code>
                </p>
                <ul className={`list-${iconType}`}>
                  {[
                    'Lorem ipsum dolor sit amet',
                    'Consectetur adipiscing elit',
                    'Integer molestie lorem at massa',
                    'Facilisis in pretium nisl aliquet',
                    'Nulla volutpat aliquam velit'
                  ].map((item, index) => (
                    <li key={`${iconType}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Typography;