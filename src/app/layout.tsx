import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/HEADER";
import Footer from "../../components/FOOTER";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen "> {/* Body background white */}
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow pb-20">
          <div className="max-w-screen-2xl mx-auto px-4 py-8">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}




