import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

export const metadata: Metadata = {
  title: "Clair de Lune Salão de Beleza",
  description:
    "Salão de Beleza por assinatura em Pedra de Guaratiba / Rio de Janeiro com agendamento online",
  openGraph: {
    title: "Beleza por assinatura em Pedra de Guaratiba",
    description:
      "Faça suas unhas e cabelos semanalmente por um preço mensal acessível. Assine agora!",
    type: "website",
    url: "https://salaoclairdelune.com.br/",
    siteName: "Clair de Lune Salão de Beleza",
    locale: "pt_BR",
    images: [
      {
        url: "https://salaoclairdelune.com.br/assets/thumb-metatags-clair-de-lune-salao-de-beleza.jpg",
        alt: "Clair de Lune Salão de Beleza",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Beleza por assinatura em Pedra de Guaratiba",
    description:
      "Faça suas unhas e cabelos semanalmente por um preço mensal acessível. Assine agora!",
    images: ["https://salaoclairdelune.com.br/assets/thumb-metatags-clair-de-lune-salao-de-beleza.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${albertSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
