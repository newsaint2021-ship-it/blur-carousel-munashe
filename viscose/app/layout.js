import "./globals.css";

export const metadata = {
  title: "Aurexis Digital Studio // Viscose",
  description:
    "Aurexis Digital Studio — We make the digital feel extraordinary through strategy, design, and computational technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
