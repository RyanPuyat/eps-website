import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | EPS Corner`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
  keywords: [
    'EPS',
    'exam prep',
    'study resources',
    'eps vocabs',
    'scbt',
    'korea',
    'korea factory worker',
    'factory worker',
  ],
  // Canonical URL
  alternates: {
    canonical: SERVER_URL,
  },
  // Open Graph (for social sharing)
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: SERVER_URL,
    siteName: APP_NAME,
    images: [
      {
        url: `${SERVER_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'EPS Corner Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
