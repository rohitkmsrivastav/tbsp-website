import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TBSP — Agentic software development for enterprise engineering',
  description:
    'TBSP carries engineering context, executable workflows, and human decisions from requirement through production.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
