import { Playfair_Display, Quicksand, Work_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: "April Duff",
  description: "Personal portfolio for April Duff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <body className="bg-background antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
