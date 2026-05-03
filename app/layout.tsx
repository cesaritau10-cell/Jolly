import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Jolly - Fios & Arte | Crochê Artesanal em Pelotas',
  description: 'Crochê artesanal exclusivo com entrega em toda a região de Pelotas. Arte em cada ponto, carinho em cada fio.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-stone-800 bg-[#F9F5F1]">
        {children}
      </body>
    </html>
  );
}
