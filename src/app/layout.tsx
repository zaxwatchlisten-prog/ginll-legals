import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ginll & GinllTrust — Official Documentation',
  description: 'Official transparency documentation for the Ginll ecosystem.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
