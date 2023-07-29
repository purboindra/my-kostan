import "./globals.css";
import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Sidebar from "./components/Sidebar";
import ModalProvider from "./components/modals/ModalProvider";
import { NextAuthProvider } from "./providers/NextAuthProvider";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Kostan",
  description: "Kostannya para mahasiswa",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <ModalProvider />
        <NextAuthProvider session={session}>
          <Sidebar>{children}</Sidebar>
        </NextAuthProvider>
      </body>
    </html>
  );
}
