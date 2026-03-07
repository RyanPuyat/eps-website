import { User2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

function Header() {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={50}
              width={50}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3 app-name tracking-tighter">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <User2Icon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
