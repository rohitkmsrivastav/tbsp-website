import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TBSP — Turn faster coding into better delivery',
  description:
    'TBSP connects requirements, code, reviews, and production context so enterprise teams can carry decisions and evidence through software delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* App Router root layout: this font stylesheet is shared by every route. */}
        {/* oxlint-disable-next-line next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans+Condensed:wght@500;600&family=IBM+Plex+Mono&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
