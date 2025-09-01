import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

export const metadata: Metadata = {
    title: "The New Code",
    description: "موقع الشركة ",
      icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ar" dir="rtl">
            <body className="font-sans">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
