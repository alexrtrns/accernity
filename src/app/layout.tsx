import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ui/theme-provider';
import Header from '@/components/ui/layout/header';
import BottomNav from '@/components/ui/layout/bottom-nav';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LegalConnect - Online Legal Consultations',
  description: 'Professional legal consultations platform connecting clients with lawyers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={`${inter.className} antialiased`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}