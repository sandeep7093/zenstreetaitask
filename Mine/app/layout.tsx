import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multi-Step Form',
  description: 'A collaborative multi-step form built with Next.js, Tailwind CSS, and Zustand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background ">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center text-center gap-4">
                <h1 className="text-2xl font-bold px-2">Multi-Step Form</h1>
                <div className="flex gap-4 items-center">
                  <a href="https://mirzaaslambeg.netlify.app/" target="_blank" rel="noopener noreferrer" className="button-transition bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-400">
                    My Portfolio
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Multi-Step Form. All rights reserved.
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
