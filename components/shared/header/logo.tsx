'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { APP_NAME } from '@/lib/constants';
import { useEffect, useState } from 'react';

function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // if (!resolvedTheme) return null;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === 'dark' ? '/images/logowhite.png' : '/images/logo.png';

  const textColor =
    resolvedTheme === 'dark'
      ? 'var(--primary)' // dark mode primary
      : 'var(--primary)'; // light mode primary (both already set in CSS)

  return (
    <Link href="/" className="flex-start">
      <Image
        src={logoSrc}
        alt="App logo"
        height={50}
        width={50}
        priority
        className="transition-opacity duration-300 ease-in-out"
      />
      <span
        className="hidden lg:block font-bold text-2xl ml-3 tracking-tighter"
        style={{ color: textColor }}
      >
        {APP_NAME}
      </span>
    </Link>
  );
}

export default Logo;
