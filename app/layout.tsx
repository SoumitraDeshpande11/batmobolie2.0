import './globals.css';
import { Orbitron, Poppins } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable}`}>
      <body className="bg-black text-white font-poppins">
        {children}
      </body>
    </html>
  );
}