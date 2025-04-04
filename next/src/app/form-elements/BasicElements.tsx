// Importando os módulos necessários
import { useState, useEffect } from 'react'; // Hooks do React
import { Form } from 'react-bootstrap'; // Componentes de formulário do Bootstrap
import DatePicker from "react-datepicker"; // Componente de seleção de data
import "react-datepicker/dist/react-datepicker.css"; // Estilos do DatePicker
import bsCustomFileInput from 'bs-custom-file-input'; // Biblioteca para estilização de inputs de arquivo

// Definindo o componente BasicElements como uma função componente
const BasicElements = () => {
  // Estado para armazenar a data selecionada
  const [startDate, setStartDate] = useState(new Date());

  // Função para manipular mudanças na data
  const handleChange = (date) => {
    setStartDate(date);
  };

  // Efeito para inicializar a estilização de inputs de arquivo
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  return (
    <div>
      {/* Cabeçalho da página com breadcrumb */}
      <div className="page-header">
        <h3 className="page-title">Form elements</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" onClick={(e) => e.preventDefault()}>Forms</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Form elements</li>
          </ol>
        </nav>
      </div>

      {/* Seção principal com vários exemplos de formulários */}
      <div className="row">
        {/* Formulário padrão */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Default form</h4>
              <p className="card-description">Basic form layout</p>
              <form className="forms-sample">
                {/* Campos do formulário com Form.Group para agrupamento lógico */}
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">Username</label>
                  <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" size="lg" />
                </Form.Group>
                {/* Mais campos do formulário... */}
              </form>
            </div>
          </div>
        </div>

        {/* Formulário horizontal */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Horizontal Form</h4>
              <p className="card-description">Horizontal form layout</p>
              <form className="forms-sample">
                {/* Campos com layout horizontal usando row/col */}
                <Form.Group className="row">
                  <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="Username" />
                  </div>
                </Form.Group>
                {/* Mais campos do formulário... */}
              </form>
            </div>
          </div>
        </div>

        {/* Elementos básicos de formulário */}
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic form elements</h4>
              <p className="card-description">Basic form elements</p>
              <form className="forms-sample">
                {/* Inclui vários tipos de controles de formulário */}
                <Form.Group>
                  <label htmlFor="exampleSelectGender">Gender</label>
                  <select className="form-control" id="exampleSelectGender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Form.Group>
                
                {/* Upload de arquivo com estilização personalizada */}
                <Form.Group>
                  <label>File upload</label>
                  <div className="custom-file">
                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                    <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                  </div>
                </Form.Group>
                
                {/* DatePicker integrado */}
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Date of Birth</label>
                  <div className="col-sm-9">
                    <DatePicker 
                      className="form-control w-100"
                      selected={startDate}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>

        {/* Demais seções de exemplos (tamanhos de input, grupos de input, checkboxes, etc.) */}
        {/* ... */}
      </div>
    </div>
  );
};

export default BasicElements;