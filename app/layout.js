import "./globals.css";

export const metadata = {
  title: "April Duff",
  description: "Personal portfolio for April Duff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f6f7f2] antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
