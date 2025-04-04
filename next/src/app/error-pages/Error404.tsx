import Link from 'next/link'; // Componente Link do Next.js para navegação entre páginas

// Definindo o componente Error404 como uma função componente (ao invés de classe)
const Error404 = () => {
  return (
    <div>
      {/* Div principal com classes de estilo para centralização e fundo azul */}
      <div className="d-flex align-items-center text-center error-page bg-primary pt-5 pb-4 h-100">
        <div className="row flex-grow">
          <div className="col-lg-8 mx-auto text-white">
            {/* Linha que contém o código de erro e a mensagem */}
            <div className="row align-items-center d-flex flex-row">
              {/* Coluna para o número 404 (lado direito em telas grandes) */}
              <div className="col-lg-6 text-lg-right pr-lg-4">
                <h1 className="display-1 mb-0">404</h1> {/* Código de erro grande */}
              </div>
              
              {/* Coluna para a mensagem de erro (lado esquerdo em telas grandes) */}
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>SORRY!</h2> {/* Título */}
                <h3 className="font-weight-light">The page you're looking for was not found.</h3> {/* Subtítulo */}
              </div>
            </div>
            
            {/* Linha com o botão/link para voltar à página inicial */}
            <div className="row mt-5">
              <div className="col-12 text-center mt-xl-2">
                {/* Link estilizado que redireciona para a página inicial */}
                <Link className="text-white font-weight-medium" href="/dashboard">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404; // Exporta o componente como padrão