// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import App from './App'; // Importação correta do componente

export const metadata: Metadata = {
  title: 'Stellar React',
  description: 'Migrated to Next.js 15',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* Garanta que App está sendo importado corretamente */}
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}