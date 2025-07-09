import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "April Duff",
  description: "Personal portfolio for April Duff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant_garamond.className} ${work_sans.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
