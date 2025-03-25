import { Inter } from "next/font/google";
import "./globals.css";
// import cn from '@/lib/utils'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste Bigfive",
  description: "Conheça sua personalidade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={cn('bg-slate-50 min-h-screen min-w-screen', inter.className)}>{children}</body>
    </html>
  );
}
