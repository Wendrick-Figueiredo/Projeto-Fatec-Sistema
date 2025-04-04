/**
 * Componente Spinner - Mostra um indicador de carregamento visual
 * 
 * Conversão de Class Component para Function Component
 * Mantém a mesma estrutura e funcionalidade do original
 */
const Spinner = () => {
  return (
    <div>
      {/* Wrapper para posicionamento e estilização do spinner */}
      <div className="spinner-wrapper">
        {/* Elemento visual do spinner (estilizado via CSS) */}
        <div className="donut"></div>
      </div>
    </div>
  );
};

export default Spinner;