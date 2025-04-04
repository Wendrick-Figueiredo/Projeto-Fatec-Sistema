// Importando o componente Link do Next.js para navegação entre páginas
import Link from 'next/link';

// Definindo o componente Error500 como uma função componente
const Error500 = () => {
  return (
    <div>
      {/* Container principal com classes de estilo para centralização e fundo azul claro */}
      <div className="d-flex align-items-center text-center error-page bg-info pt-5 pb-4 h-100">
        <div className="row flex-grow">
          {/* Container central com largura máxima de 7 colunas em telas grandes */}
          <div className="col-lg-7 mx-auto text-white">
            {/* Linha que contém o código de erro e a mensagem */}
            <div className="row align-items-center d-flex flex-row">
              {/* Coluna para o número 500 (alinhado à direita em telas grandes) */}
              <div className="col-lg-6 text-lg-right pr-lg-4">
                <h1 className="display-1 mb-0">500</h1> {/* Código de erro em tamanho grande */}
              </div>
              
              {/* Coluna para a mensagem de erro (alinhado à esquerda em telas grandes) */}
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>SORRY!</h2> {/* Título da mensagem */}
                <h3 className="font-weight-light">Internal server error!</h3> {/* Descrição do erro */}
              </div>
            </div>
            
            {/* Linha com o botão/link para voltar à página inicial */}
            <div className="row mt-5">
              <div className="col-12 text-center mt-xl-2">
                {/* Link estilizado que redireciona para a página dashboard */}
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

export default Error500; // Exporta o componente como padrão