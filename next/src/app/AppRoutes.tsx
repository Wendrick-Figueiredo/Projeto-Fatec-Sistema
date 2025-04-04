import { Suspense, lazy } from "react";
import { usePathname, redirect } from "next/navigation"; // Substitui react-router
import Spinner from "../app/shared/Spinner";

/**
 * Componente AppRoutes - Configuração de rotas principais da aplicação
 * 
 * Principais mudanças:
 * - Substituição de react-router pelo sistema de roteamento do Next.js
 * - Uso do sistema de arquivos para rotas (app/[route]/page.tsx)
 * - Manutenção do lazy loading para code splitting
 */

// Carregamento preguiçoso dos componentes
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));
const BasicElements = lazy(() => import("./form-elements/BasicElements"));
const BasicTable = lazy(() => import("./tables/BasicTable"));
const Mdi = lazy(() => import("./icons/Mdi"));
const ChartJs = lazy(() => import("./charts/ChartJs"));
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));
const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// Componente de roteamento principal
const AppRoutes = () => {
  const pathname = usePathname();

  // Redirecionamento condicional (substitui o <Redirect>)
  if (pathname === "/") {
    redirect("/dashboard");
  }

  // Renderização condicional baseada na rota
  const renderRoute = () => {
    switch (pathname) {
      case "/dashboard":
        return <Dashboard />;
      case "/basic-ui/buttons":
        return <Buttons />;
      case "/basic-ui/dropdowns":
        return <Dropdowns />;
      case "/basic-ui/typography":
        return <Typography />;
      case "/form-Elements/basic-elements":
        return <BasicElements />;
      case "/tables/basic-table":
        return <BasicTable />;
      case "/icons/mdi":
        return <Mdi />;
      case "/charts/chart-js":
        return <ChartJs />;
      case "/user-pages/login-1":
        return <Login />;
      case "/user-pages/register-1":
        return <Register1 />;
      case "/error-pages/error-404":
        return <Error404 />;
      case "/error-pages/error-500":
        return <Error500 />;
      default:
        return <Error404 />;
    }
  };

  return (
    <Suspense fallback={<Spinner />}>
      {renderRoute()}
    </Suspense>
  );
};

export default AppRoutes;