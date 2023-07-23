import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import ModalProvider from "./components/modals/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Kostan",
  description: "Kostannya para mahasiswa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
