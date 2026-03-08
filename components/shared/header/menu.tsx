import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ModeToggle from './mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EllipsisVertical, User2Icon } from 'lucide-react';

function Menu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild>
          <Link href="/sign-in">
            <User2Icon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle className="mt-4 ml-4">Menu</SheetTitle>
            <div className="ml-4 mt-2">
              <ModeToggle />
            </div>

            <div className="ml-4 mt-2">
              <Button asChild>
                <Link href="/sign-in">
                  <User2Icon /> Sign In
                </Link>
              </Button>
            </div>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Menu;
